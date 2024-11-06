import { DataTypes, Model } from "sequelize";
import sequelize from "./sequelise";
import { Camera } from "./Camera";

export interface DeviceAttributes {
    id: number;
    label: string;
    ip: string;
    port: string;
    dashboardPort: string;
    createdAt: Date;
}
class Device extends Model<DeviceAttributes> {
    public id!: number;
    public label!: string;
    public ip!: string;
    public port!: string;
    public dashboardPort!: string;
    public createdAt!: Date;
}

Device.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    label: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ip: {
        type: DataTypes.STRING,
        allowNull: false
    },
    port: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dashboardPort: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        defaultValue: DataTypes.NOW,
        type: DataTypes.DATE,
        allowNull: false
    }

}, {
    sequelize,
    modelName: "device"
})

Device.hasMany(Camera, {
    foreignKey: 'deviceId',
    as: "cameras"
})


Camera.belongsTo(Device, {
    foreignKey: 'deviceId',
    as: "device"
})

export { Device }