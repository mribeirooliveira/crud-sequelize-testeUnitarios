import { Sequelize } from "sequelize-typescript";

export const db =  new Sequelize(
    'crud','root','',{
        dialect:'mysql',
        host:'localhost',
        port:3306
    });