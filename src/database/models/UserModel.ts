import { DataTypes } from "sequelize"
import {db} from "../db"
export const UserModel=db.define("user",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    senha:{
        type:DataTypes.STRING,
        allowNull:false
    }

})