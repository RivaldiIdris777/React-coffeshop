import User from "../models/UserModel.js";
import argon2 from "argon2";
import path from "path";
import fs from "fs";

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll({
            attributes:['uuid','name','email','role','image','url']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            attributes:['uuid','name','email','phone','role','image'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserProfile = async(req, res) =>{
    try {
        const response = await User.findOne({
            attributes:['uuid','name','email','phone','role','image','url'],
            where: {
                email: req.email
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createUser2 = async(req, res) =>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const file = req.files.file;
    const confPassword = req.body.confPassword;
    const role = req.body.role;        
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','jpg','jpeg'];        
    
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});

    const hashPassword = await argon2.hash(password);

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});

    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err) => {
        if(err) return res.status(500).json({msg: err.message});
        try {
            await User.create({name: name, username: username, email: email, password: hashPassword, image: fileName, role: role, url: url});
            res.status(201).json({msg: "User Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

// export const createUser = async(req, res) =>{
//     const {name, email, password, confPassword, role} = req.body;
//     if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
//     const hashPassword = await argon2.hash(password);
//     try {
//         await User.create({
//             name: name,
//             email: email,
//             password: hashPassword,
//             role: role
//         });
//         res.status(201).json({msg: "Register Berhasil"});
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }


export const updateUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uuid: req.params.uuid
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});

    let fileName = "";
    if(req.files === null){
        fileName = user.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/${user.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }

    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confPassword = req.body.password;
    const role = req.body.role;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
        
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    try {
        await User.update({
            name: name,
            username: username,
            email: email,
            password: hashPassword,
            role: role,
            image: fileName,
            url: url
        },{
            where:{
                uuid: user.uuid
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uuid: req.params.uuid
        }
    });    
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    try {
        const filePath = `./public/images/${user.image}`;
        fs.unlinkSync(filePath);
        await User.destroy({
            where:{
                user_id: user.user_id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}