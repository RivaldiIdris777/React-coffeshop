import express from "express";
import FileUpload from "express-fileupload";
import db from "./config/Database.js";
import cors from "cors";
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import dotenv from "dotenv";

import cookieparser from "cookie-parser";

import UserRoute from "./routes/UserRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRouter.js";
import CartRoute from "./routes/CartRoute.js";
import OrderRoute from "./routes/OrderRoute.js";
dotenv.config();

const app = express();

(async()=>{
    await db.sync();
})();

try { 
    await db.authenticate();
    console.log('Database Connected..');    
}catch (error) {
    console.error(error)
}


app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(cookieparser());

app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(UserRoute);
app.use(CategoryRoute);
app.use(ProductRoute);
app.use(AuthRoute);
app.use(CartRoute);
app.use(OrderRoute);

app.listen(process.env.APP_PORT, ()=> {
    console.log(`Server running at port ${process.env.APP_PORT}`)
});