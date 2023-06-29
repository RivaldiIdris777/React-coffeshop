import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import path from "path";
import fs from "fs";
import Categories from "../models/CategoryModel.js";
import { Op } from "sequelize";


export const getProducts2 = async (req, res) => {        
    try {
        let response;
        const { category, allCategory } = req.query
        if (category) {
            response = await Product.findAll({
                attributes:['uuid','name','price','category_id','image','url'],                
                include:[{
                    model: Categories, as: "category",
                    where :  {
                        [Op.or]: [{name: {
                            [Op.like] : '%'+category+'%'
                        }}]
                    },
                    attributes: ['uuid','name']
                }]
            });
        }
        if (allCategory) {
            response = await Product.findAll({
                attributes:['uuid','name','price','category_id','image','url'],                
                include:[{
                    model: Categories, as: "category",
                    attributes: ['uuid','name']
                }]
            });
        }
        if(!category) {
            response = await Product.findAll({
                attributes:['uuid','name','price','category_id','image','url'],                
                include:[{
                    model: Categories, as: "category",
                    attributes: ['uuid','name']
                }]
            });
        }
    res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductById = async(req, res) =>{
    try {
        const response = await Product.findOne({
            where:{
                uuid: req.params.uuid
            }
        });
        if(!response) return res.status(404).json({msg: "Data tidak ditemukan"});
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
}

export const createProduct = async(req, res) =>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;    
    const file = req.files.file;
    const userId = req.body.userId
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','jpg','jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err) => {
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Product.create({name: name, price: price, category_id: category, image: fileName, userId: userId, url: url});
            res.status(201).json({msg: "Product Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const updateProduct = async(req, res) =>{
    const product = await Product.findOne({
        where: {
            uuid: req.params.uuid
        }
    })
    if(!product) return res.status(404).json({msg: "Product tidak ditemukan"});

    let fileName = "";

    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }

    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    const userId = req.body.userId;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    try {
        await Product.update({
            name: name,
            price: price,
            category: category,
            userId: userId,            
            image: fileName,
            url: url
        },{
            where:{
                uuid: product.uuid
            }
        });
        res.status(200).json({msg: "Product Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteProduct = async(req, res) =>{
    const product = await Product.findOne({
        where: {
            product_id: req.params.id
        }
    })
    try {
        const filePath = `./public/images/${product.image}`;
        fs.unlinkSync(filePath);
        await Product.destroy({
            where:{
                product_id: product.product_id
            }
        });
        res.status(200).json({msg: "Product Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
