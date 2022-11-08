import { UserModel } from "../database/models/UserModel";
import { Model } from "sequelize/types";
import {Op} from "sequelize";
import { Irepository } from "../interfaces/irepository";
export class repoUser implements Irepository{
   constructor(){

   } 

   public async createUser(nome:string,senha:string):Promise<boolean> {    
    const create =await UserModel.create({ nome:nome,senha:senha});
    if(create)
    return true
    else return false
   }
   
   
   public async findOne(userNome:string):Promise<boolean>{
    const findone= await UserModel.findOne({
        where:{
            nome:userNome
        },
    })
    if(findone)
    return true
    else return false
   }
   

 public  async login(nome: string, senha: string):Promise<boolean> {
    const login= await  UserModel.findOne({
        where:{
           [Op.and]:[
           {nome:nome},
           { senha:senha}]
        },
   })
   if(login) return true
   else return false
}

}