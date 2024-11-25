

import { DataTypes, Model } from "sequelize";
import sequelize from "./sequelise";

export interface IdentifierAttributes {
    id: number
    identifierId: string;
    licensePlate: string;
    parkingId: number;
    organizationName?: string;
    vehicleType: string;
    rfid?: string;
    identifierType: string
    owner?: string;
    email?: string;
    validFrom?: Date;
    validTo?: Date

}

class Identifier extends Model<IdentifierAttributes> {
    public id!: number
    public identifierId!: string;
    public licensePlate!: string;
    public rfid: string | undefined;
    public parkingId: number | undefined;
    public organizationName: string | undefined;
    public vehicleType!: string;
    public identifierType!: string

}

Identifier.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    identifierId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    licensePlate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parkingId: {
        type: DataTypes.INTEGER,
    },
    rfid: {
        type: DataTypes.STRING,
    },
    organizationName: {
        type: DataTypes.STRING,
    },
    vehicleType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identifierType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING
    },
    owner: {
        type: DataTypes.STRING
    },
    validFrom: {
        type: DataTypes.STRING
    },
    validTo: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: "identifiers"
})

export default Identifier
