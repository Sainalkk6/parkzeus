"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
const options = {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_DB_PORT,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres"
};
const sequelize = new sequelize_1.Sequelize(options);
exports.default = sequelize;
