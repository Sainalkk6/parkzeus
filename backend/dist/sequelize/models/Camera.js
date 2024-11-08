"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
const sequelize_1 = require("sequelize");
const Device_1 = require("./Device");
const sequelise_1 = __importDefault(require("./sequelise"));
class Camera extends sequelize_1.Model {
}
exports.Camera = Camera;
Camera.init({
    cameraId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    activated: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    external_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    deviceId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Device_1.Device,
            key: 'id'
        }
    },
    createdAt: {
        defaultValue: sequelize_1.DataTypes.NOW,
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    ip: {
        type: sequelize_1.DataTypes.STRING
    },
    port: {
        type: sequelize_1.DataTypes.INTEGER
    },
    saved: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
    label: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: sequelise_1.default,
    modelName: 'Camera'
});
