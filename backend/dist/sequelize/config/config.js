"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
exports.default = {
    development: {
        username: "postgres",
        password: "sainal",
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        dialect: "postgres"
    },
    test: {
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        dialect: "postgres"
    },
    production: {
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        dialect: "postgres"
    }
};
