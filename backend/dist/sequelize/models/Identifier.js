"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelise_1 = __importDefault(require("./sequelise"));
class Identifier extends sequelize_1.Model {
}
Identifier.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    identifierId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    licensePlate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    parkingId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    rfid: {
        type: sequelize_1.DataTypes.STRING,
    },
    organizationName: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    identifierType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    owner: {
        type: sequelize_1.DataTypes.STRING
    },
    validFrom: {
        type: sequelize_1.DataTypes.STRING
    },
    validTo: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: sequelise_1.default,
    modelName: "identifiers"
});
exports.default = Identifier;
