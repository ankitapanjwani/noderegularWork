

var express = require('express');
var app = express();

app.get("/welcome",(req,res)=>{
    console.log("welcome");
res.send("Welcome page..of welcome route");
});

app.get("/",(req,res)=>{
    res.redirect('/welcome');
    });


app.listen(8090,()=>{
    console.log("listening...");
 });
 
 