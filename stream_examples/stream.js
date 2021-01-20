var fs = require('fs');
var data = ' ';
var readerstream = fs.createReadStream('input.txt');
readerstream.setEncoding('utf-8');


readerstream.on('data', function(chunk){
    data+=chunk;
});

readerstream.on('end', function(){
    console.log(data);
});

readerstream.on('error', function(err){
    console.log(err.stack);
});


