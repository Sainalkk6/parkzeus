import { DataTypes, Model } from "sequelize";
import { Device } from "./Device";
import sequelize from ".";

export interface CameraAttributes {
    cameraId:number;
    name:string;
    activated:boolean;
    external_id:number | null;
    deviceId:number;
    createdAt:Date
}

export class Camera extends Model<CameraAttributes>{
    public cameraId!:number
    public name!:string
    public activated!:boolean
    public external_id!:number|null
    public deviceId!:number
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
    }
}, {
    sequelize,
    modelName: 'Camera'
});
