
var express = require('express');
var app = express();

//sets the server to read files from public location
app.use(express.static('public'));

app.get('/',function(req,res){
res.send('index.html');
});

app.listen(8011,()=>{
    console.log("listening...");
 });
 
 