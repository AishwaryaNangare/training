import  express, {Request,Response} from "express";
import { router } from "../src/routes/routes";
import connects from "./config/db";

const app = express();
const PORT = 4011

app.use("/",router)

app.get('/test',(req:Request,res:Response):void=>{
    res.json({data:'test page'})
})

connects();

app.listen(PORT,():void=>{
    console.log(`server started on Port ${PORT}`)
})
