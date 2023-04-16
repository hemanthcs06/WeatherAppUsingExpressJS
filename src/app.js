const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const PORT= process.env.PORT || 8000;
const staticPath=path.join(__dirname,"..//public");
const viewpath=path.join(__dirname,"..//templates//views");
const partialspath=path.join(__dirname,"..//templates//partials");

app.use(express.static(staticPath));
app.set("view engine","hbs");

app.set("views",viewpath);
hbs.registerPartials(partialspath);

app.get("/",(req,res)=>{
  res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404",{errorcomment:"Oops!!!Page Not Found!!"});
});

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
});