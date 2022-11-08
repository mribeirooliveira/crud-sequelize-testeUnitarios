import {app} from "./app"
import { db } from "./database/db";
app.listen(3001,async()=>{
    await db.sync()
    console.log('server running')

});                                             