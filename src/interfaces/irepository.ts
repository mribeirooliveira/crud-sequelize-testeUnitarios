import { Model } from "sequelize/types"
export interface Irepository{
createUser(nome: string, senha: string):Promise<boolean>
findOne(userNome:string):Promise<boolean>
login(nome: string, senha: string):Promise<boolean>
}