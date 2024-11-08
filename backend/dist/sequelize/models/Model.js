"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Device extends sequelize_1.Model {
}
exports.Device = Device;
Device.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    label: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    ip: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    port: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dashboardPort: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        defaultValue: sequelize_1.DataTypes.NOW,
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: _1.default,
});
