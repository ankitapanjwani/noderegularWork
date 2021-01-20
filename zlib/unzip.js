const zlib = require('zlib');
const fs = require('fs');

var unzip = zlib.createUnzip();

var rstream = fs.createReadStream('output.txt.gz');
var wstream = fs.createWriteStream('outputstreamAfterunzip.txt');

rstream.pipe(unzip).pipe(wstream).on('finish',function(){
    console.log('done unzipping');
});
