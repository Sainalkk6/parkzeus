import { DataTypes, Model } from "sequelize";
import { Transaction } from "./Transaction";
import sequelize from "./sequelise";
import { Camera } from "./Camera";
import Identifier from "./Identifier";

export interface LogAttributes {
    id?: number;
    cameraId: number,
    transactionId:number,
    vehicleId:string;
}


export class Log extends Model<LogAttributes> {
    public id!: number;
    public cameraId!: number
    public transactionId!:number
    public vehicleId!:string
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
    },
    transactionId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Transaction,
            key:"id"
        }
    },
    vehicleId:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:Identifier,
            key:"identifierId"
        }
    }
}, {
    sequelize,
    modelName: "Log"
})
Log.hasMany(Transaction,{
    foreignKey:"transactionId",
    as:"transactions"
})

Log.hasMany(Camera,{
    foreignKey:"cameraId",
    as:"cameras"
})

Transaction.belongsTo(Log,{
    foreignKey:"transactionId",
    as :"log"
})

Camera.hasMany(Log,{
    foreignKey:"cameraId",
    as:"log"
})

Identifier.hasMany(Log,{
    foreignKey:"vehicleId",
    as:"log"
})

Log.belongsTo(Identifier,{
    foreignKey:"vehicleId",
    as:"vehicleLogs"
})

