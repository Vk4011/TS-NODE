import express from "express";
import {Request,Response} from "express";


const app = express();
const port =    3000;


app.get("/",(req:Request,res:Response)=>res.json({msg: "server is running sucessfully"}));


app.listen(port,()=>{console.log(`\n\t Server : http://127.0.0.1:${port} \n`)});