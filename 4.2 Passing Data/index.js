import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var data={};
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   data={
    head:"Write your name below",
  };
  res.render("index.ejs",data);
  
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  const name=req.body.fName+req.body.lName;
  console.log(name);
  const len=name.length;
  data={head:`Your name has ${len} characters!`};
  res.render("index.ejs",data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
