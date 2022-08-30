import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";

class UserController{
 async findAll(req:Request,res:Response){
    const users = await UserModel.findAll();
    return users.length>0
    ?res.status(200).json(users)//sucesso
    :res.status(204).send(); //nao sucesso
 }
  async findOne(req:Request,res:Response){
   const {userid}= req.params;
    const user = await UserModel.findOne({
        where:{
            id:userid
        },
    });
     return user ? res.status(200).json(user)
     :res.status(204).send();
  }
 async create(req:Request,res:Response){
    const {nome} = req.body;
    const user = await  UserModel.create({
        nome
    });
    return res.status(201).json(user)
 };
 async update(req:Request,res:Response){
    const {userid}= req.params;
    await UserModel.update(req.body,{
        where:{
            id:userid
        },
    });
    return res.status(204).send()
 }

 async destroy(req:Request,res:Response){
    const {userid}= req.params;
    await UserModel.destroy({where:{id:userid}});
    return res.status(204).send;

 }

}

export default new UserController()