import Cart from "../models/CartModel.js";
import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const getCart = async(req, res) =>{
    try {
        const response = await Cart.findAll({
            attributes:['uuid','name']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getCartByUserId = async (req, res) => {
     try {
        // get data user id from token
        const refreshToken = req.cookies.refreshToken;
        if(refreshToken == null) 
        return res.status(401).json({msg: "Login First to access this resource"});

        var decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);        
        const userToken = decoded.user_id;
        
        // get data cart from matching user 
        const userCart = await Cart.findOne({
            include:[{
                model: Product, as: "products"
            }],
            where: {
                user_id: userToken
            }
        });
        
        if(!userCart) return res.status(400).json({
            msg: "User Cart dont match"
        })

        res.status(200).json({ 
            status: 200,
            msg: "Success get data cart",
            data: userCart
        })

     } catch (error) {
            console.log(error);
     }
}

export const getCartById = async(req, res) =>{
    try {
        const response = await Cart.findOne({
            include:[
                {
                    model: User, as: "users",
                    attributes: ['uuid','name','username','email','image','url']
                },
                {
                    model: Product, as: "products",                    
                },

            ],                        
            where:{
                uuid: req.params.uuid
            },            
        });
        if(!response) return res.status(404).json({msg: "Data not found"});
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
}


export const createCart = async(req, res) =>{    
    const userId = req.body.userId;
    const jumlah = req.body.jumlah;
    const totalHarga = req.body.totalHarga;
    const productId = req.body.productId;
    try {
        await Cart.create({            
            user_id: userId,
            jumlah: jumlah,
            total_harga: totalHarga,
            product_id: productId
        });
        res.status(201).json({msg: "Cart has been added successfully"});        
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCart = async(req, res) =>{
    
}

export const deleteCart = async(req, res) =>{
    
}


