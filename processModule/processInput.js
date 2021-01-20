var fs = require('fs');
var readline = require('readline');
const http = require('http');
const port=8060;




var char = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  char.question('Enter Character:  ',function(character){
    const server = http.createServer((req,res)=>{
           fs.readFile('index.txt',(err,data)=>{
               if(err)
               throw new Error();
        
               else{
                   res.writeHead(200,{'Context-type': 'text/html'});
                
                  let text = data.toString();
                  let splitext = text.split(" ");
               
                    for(var i =0;  i< splitext.length;i++){
                        if(splitext[i].charAt(0)==character){
                            res.write(splitext[i] + " ");
                        }
                    }
                    // console.log(splitext[i] + " ");

                    res.end();
                }
               res.end();
           })

        //    fs.writeFile('output.txt',(err,data)=>{
        //     if(err)
        //     throw new Error();
     
        //     else{
                
        //          res.end();
        //      }
        //     res.end();
        // })
           
        }).listen(port);
        
server.on('listening',function(){
    console.log('Listening on port '+ port);
});
  });
  

