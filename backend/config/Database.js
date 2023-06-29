import {Sequelize} from "sequelize";

const db = new Sequelize('coffeshop', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

export default db;