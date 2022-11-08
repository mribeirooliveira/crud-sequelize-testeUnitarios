import express, {Request, Response, } from "express"
import { userController2 } from "./controller/userConstroller2";
import { Router } from "express";
export class router1{
    rota:Router
    userController:userController2
    constructor(controller:userController2){
        this.userController=controller
        this.rota=Router()
    }
 public rotas=()=>{
    this.rota.post("/user",this.userController.create);
    this.rota.get("/user/:userNome",this.userController.findOne);
    this.rota.get("/user/login/:userNome/:userSenha",this.userController.login);     
    return this.rota
 }
 //router.post("/user",UserControllerr.create);
//router.get("/user/:userNome",UserControllerr.findOne);
//router.get("/user/login/:userNome/:userSenha",UserControllerr.login);
}

/*const router1 = express.Router()
const create =  (req: Request, res: Response, next: Function)=>{
    if(!req.body.userNome){
        res.status(400).json('You need to pass first name')
     }
     res.status(201).json({message: "User is Created"})
}

router1.post("/register", create);

export default router1;*/