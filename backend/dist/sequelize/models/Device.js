"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const sequelize_1 = require("sequelize");
const sequelise_1 = __importDefault(require("./sequelise"));
const Camera_1 = require("./Camera");
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
    sequelize: sequelise_1.default,
    modelName: "device"
});
Device.hasMany(Camera_1.Camera, {
    foreignKey: 'deviceId',
    as: "cameras"
});
Camera_1.Camera.belongsTo(Device, {
    foreignKey: 'deviceId',
    as: "device"
});
