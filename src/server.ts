import  express from "express";
import { json } from "express";
import { db } from "./database/db";
import { router } from "./rauter"

const app =  express();

app.use(json())
app.use(router)
app.listen(3001,async()=>{
    await db.sync()
    console.log('server running')

}) ;                                             