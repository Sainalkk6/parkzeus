import { DataTypes, Model } from "sequelize";
import sequelize from "./sequelise";
import { Camera } from "./Camera";

export interface TransactionAttributes {
    id?:number;
    entryTime:Date | null;
    exitTime:Date | null;
    invalidatedAt:Date | null
    identifierId:string;
}

export class Transaction extends Model<TransactionAttributes>{
    public id!:number
    public entryTime!:Date | null
    public exitTime!: Date | null;
    public invalidatedAt!:Date | null
    public identifierId!:string 
    
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

},{
    sequelize,
    modelName:"Transaction"
})

