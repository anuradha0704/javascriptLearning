//program for square of the number
console.warn("// Square of the number//");
console.log("Given number:5,6,25,100")
var square = function (arg1){
  console.log("Square of Given Number:-",arg1*arg1);
}
square(5);
square(6);
square(25);
console.log("")
console.log("Type of function:-", typeof square);

console.log("********************************************");

//program For area of triangle
console.warn("// area of Triangle//");
console.log("Given data:- Base=45, Height=34")
var area_of_triangle = function(base, height){
    console.log("Area of triangle:-", 1/2*base*height);
}
area_of_triangle(45,34);
console.log("********************************************");

//program for area of rectangle
console.warn("// area of Rectangle//");
console.log("Given data:- length=499, width=917")
var area_of_rectangle = function(length, width){
    console.log("Area of rectangle:-", length*width);
}
area_of_rectangle(499,917);
console.log("********************************************");

//Swapping values
console.warn("// Swapping values//");
var swap_values= function(num1,num2){
    console.log("Before Swap values:-",num1,num2);
    temp=num1;
    num1=num2;
    num2=temp;
    console.log("After Swap values:-",num1,num2);
}
swap_values("1000" , "2000");
swap_values("virat", "Anushka");
console.log("********************************************");

//String
console.warn("// String program//");
var string_new = "JavaScript the most pooular language"
console.log("string:-", string_new);

var count =string_new.length;//to count length of string
console.log("length of string:-", count);

string_new.indexOf("S");
console.log("index of Char 'S':-",string_new.indexOf("s"));

string_new.indexOf("lang");
console.log("index of Char 'lang':-",string_new.indexOf("lang"));
console.log("Third charater of string:-",string_new.charAt(3));

var last = string_new.charAt(string_new.length - 3);
console.log("last 3rd character",last);
