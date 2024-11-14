import { DataTypes, Model } from "sequelize";
import { Transaction } from "./Transaction";
import sequelize from "./sequelise";
import { Camera } from "./Camera";

export interface LogAttributes {
    id?: number;
    cameraId: number
}


export class Log extends Model<LogAttributes> {
    public id!: number;
    public cameraId!: number
}

Log.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement:true
    },
    cameraId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Camera,
            key: 'cameraId'
        }
    }
}, {
    sequelize,
    modelName: "Log"
})

Log.hasMany(Transaction, {
    foreignKey: "cameraId",
    as: "transactions"
})

Transaction.belongsTo(Log, {
    foreignKey: "cameraId",
    as: "log"
})