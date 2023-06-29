import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await User.findAll({
            where: {
                refresh_token : refreshToken
            }
        })
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const user_id = user[0].user_id;
            const uuid = user[0].uuid;
            const name = user[0].name;
            const username = user[0].username;
            const email = user[0].email;
            const phone = user[0].phone;
            const role = user[0].role;
            const image = user[0].image;
            const url = user[0].url;
            const accessToken = jwt.sign({user_id ,uuid, name, username, email, phone, role, image, url }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            });
            res.json({ accessToken });
        })        
    } catch (error) {
        console.log(error);
    }
}