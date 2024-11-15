import { DataTypes, Model } from "sequelize";
import { Device } from "./Device";
import sequelize from "./sequelise";

export interface CameraAttributes {
    cameraId: number;
    name: string;
    activated: boolean;
    external_id: number | null;
    deviceId: number;
    createdAt: Date;
    ip: string;
    port: number;
    saved: boolean;
    label:string;
    type:string;
}

export class Camera extends Model<CameraAttributes> {
    public cameraId!: number
    public name!: string
    public activated!: boolean
    public external_id!: number | null
    public deviceId!: number
    public ip: string | undefined
    public port: number | undefined
    public saved!: boolean
    public type!:string

}
Camera.init({
    cameraId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activated: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    external_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    deviceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Device,
            key: 'id'
        }
    },
    createdAt: {
        defaultValue: DataTypes.NOW,
        type: DataTypes.DATE,
        allowNull: false
    },
    ip: {
        type: DataTypes.STRING
    },
    port: {
        type: DataTypes.INTEGER
    },
    saved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    label:{
        type:DataTypes.STRING
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false
    }
}, {
    sequelize,
    modelName: 'Camera'
});
