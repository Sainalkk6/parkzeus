import { DataTypes, Model } from "sequelize";
import sequelize from "./sequelise";
import { Camera } from "./Camera";

export interface EventAttributes {
    id?: number;
    serverEvents: any
    eventLog: { cameraId: string, externalId: string, identifierId: string, timeStamp: string, images: string[], cameraName: string }
    externalCameraId: number
}

class Events extends Model<EventAttributes> {
    public id!: number;
    public serverEvents!: any;
    public eventLog!: { cameraId: string, externalId: string, identifierId: string, timeStamp: string, images: string[], cameraName: string };
    public externalCameraId!: number;
}

Events.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    serverEvents: {
        type: DataTypes.JSONB,
    },
    eventLog: {
        type: DataTypes.JSONB
    },
    externalCameraId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Camera,
            key: "cameraId"
        }
    }

}, {
    sequelize,
    modelName: "events"
})

Camera.hasMany(Events, {
    foreignKey: "externalCameraId",
    as: "events"
})

Events.belongsTo(Camera, {
    foreignKey: "externalCameraId",
    as: "cameraId"
})

export default Events;