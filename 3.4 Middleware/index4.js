import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app=express();
function logger(req,res,next){
  console.log("Method: ",req.method," URL: ",req.url);
  next();
};
app.use(bodyParser.urlencoded({extended:true}));
app.use(logger);
app.get("/",function(req,res){
  res.sendFile(__dirname+"/public/index.html");
});

app.post("/submit",function(req,res){
const street=req.body.street;
const pet=req.body.pet;
console.log("Street: ",street," Pet: ",pet);
res.send(`<h1>${street}${pet}`);
});


app.listen(3000,function(req,res){
  console.log("Server is running at http://localhost:3000");
});