import { DataTypes, Sequelize } from "sequelize";
import db from "../config/Database.js"
import Products from "./ProductModel.js";
import User from "./UserModel.js";

const Carts = db.define('carts', {
    cart_id: {
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
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    total_harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});

Carts.belongsTo(Products, {foreignKey: 'product_id', as: 'products'});
Carts.belongsTo(User, {foreignKey: 'user_id', as: 'users'});

export default Carts;