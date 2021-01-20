

var express = require('express');
var app = express();
var cookieparser = require('cookie-parser');
app.use(cookieparser());

app.get("/cookieset",(req,res)=>{
    res.clearCookie(); //clear the cookie
    res.cookie('Name','Dilip'); //set the value in cookie
    res.status(200).send("Cookie is set");
});
//getter of cookie
app.get("/cookieget",(req,res)=>{
    res.status(200).send(req.cookies);
    });

app.listen(8090,()=>{
    console.log("listening...");
 });
 
 