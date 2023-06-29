import { DataTypes, Sequelize } from "sequelize";
import db from "../config/Database.js"


const Categories = db.define('category', {
    category_id: {
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
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    }

}, {
    freezeTableName: true
});

export default Categories;