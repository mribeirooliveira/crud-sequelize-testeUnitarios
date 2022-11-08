import  express from "express";
import { json } from "express";
//import { db } from "./database/db";

import cors from "cors"
//import { UserController } from "./controller/UserController";
//import { User } from "./UseCase/User";


import { router1 } from "./router";
import { userController2 } from "./controller/userConstroller2";  
import { useCaseUser2 } from "./UseCase/user2";
import { repoUser } from "./repository/repoUser";

//const useCaseUser=new User()



const repo = new repoUser()
const ucU=new useCaseUser2(repo)
const crt = new userController2(ucU)
const rt= new router1(crt)
//const UserControlle = new UserController(useCaseUser)
export const app =  express();
app.use(json())
app.use(cors())
//app.use(router)
app.use(rt.rotas())

//app.use("/",router1)
