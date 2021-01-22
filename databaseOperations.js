const mysql = require('mysql');
var connection = mysql.createConnection({

host: "localhost",
user: "root",
password: "root",
database: "ems"
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("Connected Sucessfully");
})

// connection.query('Select * from employee',(err,rows,cols)=>{
//     if(err) throw err;
//     console.log("Employee : " , rows)
// })

// connection.query('create table newemployee(empid int primary key, empname varchar(100), address varchar(100),phone int);',(err,rows,cols)=>{
//     if(err) throw err;
//     console.log("Table created");
// })

connection.query('INSERT INTO newemployee(empid, empname,address, phone) VALUES (1, "Utkarsh Madaan", "C-32 Punjabi Bhagh",56565);',(err,rows,cols)=>{
    if(err) throw err;
    console.log("Row inserted");
})
connection.end(()=>{
    console.log("Connection ended..");
})