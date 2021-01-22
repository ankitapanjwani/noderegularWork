const express = require('express');
const app = express();
const fs = require('fs');


//get all products
app.get('/products',(req,res)=>{
        fs.readFile(__dirname + "/db.json/","utf-8", (err,data)=>{
           
            //    console.log("Data:" + data);
               res.end(data);
            
           
        })
    });
    

    //get particular id
    app.get('/products/:id',(req,res)=>{
        fs.readFile(__dirname + "/db.json/","utf-8", (err,data)=>{
           
            if(err) throw err;

            let product = JSON.parse(data);

            // console.log(product);
            let getProductId = product['products'].find((p)=>{
                return (p.pid == req.params.id);
            });
           
            res.end(JSON.stringify(getProductId));
        })
    });
    


    app.listen(8000,()=>{
        console.log("listening...");
     });
     