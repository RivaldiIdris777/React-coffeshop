import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.sendStatus(403);
        req.email = decoded.email;        
        next();
    })
}

export const verifyToken2 = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(refreshToken == null) 
        return res.status(401).json({msg: "Login First to access this resource"});

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            req.email = decoded.email;        
            next();
        })                        
    } catch (error) {
        res.status(500).json({msg: error.message});    
    }
}
