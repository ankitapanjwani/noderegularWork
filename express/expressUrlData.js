

var express = require('express');
var app = express();

let products = [
    {
        pid: 1,
        pname: "Shampooo",
        price: 102
    },
    {
        pid: 2,
        pname: "Conditioner",
        price: 789
    },
    {
        pid: 3,
        pname: "Create",
        price: 155
    },
    {
        pid: 4,
        pname: "Bottle",
        price: 565
    }
]
//db

app.route("/product/:pid").get((req,res)=>{
  

        var id = req.params.pid;
        res.send("Product id: " + products[id].pid +"<br>Product name: " + products[id].pname + " <br>Prduct Price: " + products[id].price);


});



app.route("/post").post((req,res)=>{
  
  products.push({pid:4,pname:"Jivan",price: 555});
  res.send(products);
    
});

app.listen(8090,()=>{
    console.log("listening...");
 });
 
 