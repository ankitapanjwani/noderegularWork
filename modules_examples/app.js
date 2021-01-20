 const { myDate, myName ,sum,subtraction} =  require("./mymodule");



var msg = "Hello Nodejs!";
console.log("Message is " + msg);

var date = myDate();
console.log("Module is: " + msg + date,myName() );


 var addition = sum(2,3);

 console.log("Sum is " + addition);

 myDate.showDate = function(){
    return "Wed Jan 13 2021 11:27:29 GMT+0530 (India Standard Time)";
    // console.log("In showDate");
}
// console.log(myDate.showDate());

// console.log("My location is " + __dirname);
// console.log("My location is " + __filename);
// // setInterval(() =>{
//     console.log("Inside Time Interval");
// },2000);

// setTimeout(() =>{
//     console.log("Inside Time Out");
// },2000);


subtraction.showsub = function(){
    return "subtraction module extended test..";
}

module.exports = {subtraction ,myDate};
