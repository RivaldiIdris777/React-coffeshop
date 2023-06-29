import { DataTypes, Sequelize } from "sequelize";
import db from "../config/Database.js"
import Carts from "./CartModel.js";
import User from "./UserModel.js";


const Order = db.define('order', {
    order_id: {
        allowNull: false,
        autoIncrement : true,
        primaryKey : true,
        type: Sequelize.INTEGER
    },
    uuid: { 
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },    
}, {
    freezeTableName: true
});

Order.belongsTo(Carts, {foreignKey: 'cart_id', as: 'carts'});
Order.belongsTo(User, {foreignKey: 'user_id', as: 'users'});

export default Order;