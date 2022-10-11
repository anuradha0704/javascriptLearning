var test = function (arg1, arg2) {  //function with no name or annonemous function or unknown function
    console.log("function Expression with no name");
    return "FE"
}
var returnValue =test( 10, 20);
console.log(returnValue);

var variable_name =10;
console.log(variable_name);

console.log("******************************");
//square program
var square =function (arg1){
    console.log(arg1 * arg1);

}
square(5)


//or squre
var square= function(value){
    console.log(value * value);
}
square(20);
console.log(typeof square)