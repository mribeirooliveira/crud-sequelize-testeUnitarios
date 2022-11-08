import { Request, Response } from "express";
import { IuseCaseUser } from "../interfaces/IusecaseUser";
import { useCaseUser2 } from "../UseCase/user2";
export class userController2{
    useCaseUser:IuseCaseUser
    constructor(uCaseUser:IuseCaseUser){
         this.useCaseUser=uCaseUser
    }
    public create = async (req:Request,res:Response) => {     
        const { nome,senha } = req.body;
        const userdb = await this.useCaseUser.crateUser(nome,senha)
        console.log('criou');
        return res.status(201)
      };
     
     
        public findOne =  async (req:Request,res:Response)=>{
         const {userNome}= req.params;   
         const user = await this.useCaseUser.findUser(userNome)
         return user ? res.status(200).json(user)
         :res.status(204).send();
       }
     public login= async (req:Request,res:Response)=>{
         const {userNome}= req.params;
         const {userSenha}= req.params;        
         const user = await this.useCaseUser.loginUser(userNome,userSenha)
         return user ? res.status(200).json(user)
         :res.status(204).send();
     }
}