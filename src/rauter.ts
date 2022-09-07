import * as express from "express";
import UserController from "./controller/UserController";




export const router = express.Router()

router.post("/user",UserController.create);
//router.post("/user",async ()=>{})
router.get("/user",UserController.findAll);
router.get("/user/:userid",UserController.findOne);
router.put("/user/:userid",UserController.update);
router.delete("/user/:userid",UserController.destroy);

