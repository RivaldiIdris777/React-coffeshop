import User from "../models/UserModel.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export const Login = async (req, res) =>{    
    try {
        const user = await User.findOne({
            where:{
                email: req.body.email
            }
        });
        const match = await argon2.verify(user.password, req.body.password);
        if(!match) return res.status(400).json({
            msg: "Wrong Password"
        })
        const user_id = user.user_id;
        const uuid = user.uuid;
        const name = user.name;
        const username = user.username;
        const email = user.email;
        const role = user.role;
        const image = user.image;
        const url = user.url;

        const accesToken = jwt.sign({user_id, uuid, name, username, email, role, image, url}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({user_id, uuid, name,username, email, role, image, url}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        })
        await User.update({refresh_token: refreshToken}, {
            where: {
                uuid: uuid
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accesToken })
    } catch (error) {
        res.status(404).json({msg: "Email tidak ditemukan"})        
    }
}

export const Register = async(req, res) =>{
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    })
    if(user) return res.status(409).json({msg: "Email already register, Try other email"})
    // const {username, email, phone, password, confPassword, role} = req.body;
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const confPassword = req.body.confPassword;
    const role = 'user';

    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({            
            username: username,
            email: email,
            phone: phone,
            password: hashPassword,
            role: role
        });
        res.status(201).json({msg: "Register Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}

export const logOut = async(req, res) =>{
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await User.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].user_id;
    await User.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}