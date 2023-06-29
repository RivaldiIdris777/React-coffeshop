import { DataTypes, Sequelize } from "sequelize";
import db from "../config/Database.js"
import Categories from "./CategoryModel.js";
import Users from "./UserModel.js";

const Products = db.define('product', {
    product_id: {
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
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            notEmpty: false,
        }
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});


Products.belongsTo(Users, {foreignKey: 'userId', as: 'users'});
Products.belongsTo(Categories, {foreignKey: 'category_id', as: 'category'});



export default Products;