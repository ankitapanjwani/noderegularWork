var express = require('express');
var app = express();


//using get
app.get('/',(req,res)=>{
        res.send("hello get" );
    });

    app.post('/',(req,res)=>{
        res.send("hello get" );
    });



    app.get('/product/:product',(req,res)=>{
        res.send("Exploring.." + req.params.product);
    });
app.get('/ab*cd',(req,res)=>{
        res.send("abbba jabbba jabbaa" );
    });

   

    //using route
app.route("/user").get((req,res)=>{
    res.send("User-get Request");
});
//Route params
app.route("/").post((req,res)=>{
    res.send("user-post request");
});




app.delete("/del-user").post((req,res)=>{
    res.send("hello delete");
});

app.listen(8090,()=>{
   console.log("listening...");
});

