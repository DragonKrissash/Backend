import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();



app.get("/",(req,res)=>{
    const date=new Date();
const day=date.getDay();
console.log(day);
var msg="";
if(day==0 || day==6)
msg="It is time to party!";
else
msg="It is time to work!";
console.log(msg);
res.render("index.ejs",{
    daytype:day,
    advice:msg,
});
});

app.listen(3000,()=>{
    console.log("Server started at port 3000");
});