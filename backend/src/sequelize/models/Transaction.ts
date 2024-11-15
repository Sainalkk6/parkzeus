import { DataTypes, Model } from "sequelize";
import sequelize from "./sequelise";
import { Camera } from "./Camera";

export interface TransactionAttributes {
    id?:number;
    entryTime:Date | null;
    exitTime:Date | null;
    invalidatedAt:Date | null
    identifierId:string;
    cameraIdentifier:number
}

export class Transaction extends Model<TransactionAttributes>{
    public id!:number
    public entryTime!:Date | null
    public exitTime!: Date | null;
    public invalidatedAt!:Date | null
    public identifierId!:string 
    public cameraIdentifier!:number
    
}

Transaction.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    entryTime:{
        type:DataTypes.DATE
    },
    exitTime:{
        type:DataTypes.DATE
    },
    identifierId:{
        type:DataTypes.STRING,
        allowNull:false
    },
    invalidatedAt:{
        type:DataTypes.DATE,
    },
    cameraIdentifier:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Camera,
            key:"cameraId"
        }
    }
},{
    sequelize,
    modelName:"Transaction"
})


Camera.hasMany(Transaction,{
    foreignKey:"cameraIdentifier",
    as:"logs"
})

Transaction.belongsTo(Camera,{
    foreignKey:"cameraIdentifier",
    as:"camera"
})