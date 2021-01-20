const file = require('fs');

var buf = new Buffer(1024);
// file.readFile('myfile.txt',(err,data)=>{
// if(err) throw err;

// console.log("Reading this file..File Contents are:", data.toString())
// })

// let filesyncdata=file.readFileSync('myfile2.txt',(err,data)=>{
//     if(err) throw err;
    
//     console.log("Reading this file..File Contents are:", data.toString())
//     })


    // console.log(filesyncdata.toString());

    // file.unlink('./myfile.txt', (err) => {
    //     if (err) throw err;
    //     console.log('successfully deleted /tmp/hello');
    //   });

    //append new data in the file
    //   file.appendFile('myfile.txt', '\n New Content', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });

      //write file
    //   file.writeFile('myfile.txt', '\n New Content2', function (err) {
    //     if (err) throw err;
    //     console.log('new content added!');
    //   });

    //   file.appendFile('myfile.txt', '\n Hello old contents here', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });


    //file rename
    // file.rename('myfile3.txt', 'myfile4.txt', function (err) {
    //     if (err) throw err;
    //     console.log('File Renamed!');
    //   });


// file.open('myfile4.txt','r+',function(err,fd){
//     if(err) return console.error(err);

//     file.read(fd,buf,0,buf.length,0,function(err,bytes){
//         if(err) console.log(err);
//         console.log(bytes + " bytes read");

//         if(bytes > 0){
//             console.log(buf.slice(0,bytes).toString());
//         }

//     });

// });

    file.open('myfile4.txt','r+', (err,fd){
        if(err){
            return console.error(err);
        }

        file.read(fd,buf,0,buf.length,0,function(err,bytes){
            if(err) console.log(err)
        })

    })