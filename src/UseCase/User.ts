import { UserModel } from "../database/models/UserModel";
import { IUser } from "./IUser";

export class User implements IUser{
   nome: string;

   constructor(nome:string){
    this.nome=nome
   }
   crateUser(req:Request) { 
    const nome = req.body;
    console.log("ESTOU SENDO EXECUTADO SIM!!")   
    UserModel.create({
    nome
    });
   }
   teste(n: string): string {
       return n
   }

}