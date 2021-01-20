exports.myDate = function(){  //module
    console.log("Inside my Module");
    return new Date();
}

exports.myName =() =>{  //module
    return "Ankita";
}
   
exports.sum = function(a,b){  //module
    return (a+b);
}


exports.subtraction = function(){
   console.log("in subtraction");
}
