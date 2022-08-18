import * as express from "express";
import UserController from "./controller/UserController";

export const router = express.Router()

router.post("/user",UserController.create);
//router.post("/user",async ()=>{})
router.get("/user/:userid",async ()=>{});
router.get("/user/:userid",async ()=>{});
router.put("/user/:userid",async ()=>{});
router.delete("/user/:userid",async ()=>{});

