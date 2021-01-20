const http = require('http');
const url = require('url');
const port=8060;
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type': 'text/html'});
    const query = url.parse(req.url,true).query;
    let data = "<h1>"+ "Hello " + query.name + "</h1>";
    res.write(data);
    res.end();
}).listen(port);


server.on('listening',function(){
    console.log('Listening on port '+ port);
});