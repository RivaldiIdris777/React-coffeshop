import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Users = db.define('users', {
    user_id: {
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
        allowNull: true,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    email: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.BIGINT,
        allowNull: true,
        validate: {
             notEmpty: false,              
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    refresh_token: {
        type: DataTypes.TEXT
    }

}, {
    freezeTableName: true
});


export default Users;