import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";

class UserController{
 async findAll(req:Request,res:Response){}
 async findOne(req:Request,res:Response){}
 async create(req:Request,res:Response){
    const {nome} = req.body;
    const user = await  UserModel.create({
        nome
    })
    return res.status(201).json(user)
 }
 async update(req:Request,res:Response){}
 async destroy(req:Request,res:Response){}

}

export default new UserController()