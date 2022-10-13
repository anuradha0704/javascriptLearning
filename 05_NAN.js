console.warn("==========NAN===========");
var myResult=0/0;
console.log(myResult);
console.log(typeof myResult);

console.warn("==========converting data types===========");

var myName = "TEST";
var myAge = "31";
console.log("Data of test is:-",typeof myName);
console.log("Data type of 31 is",typeof myAge);

var myAgeInNumber = +myAge; 
console.log(myAgeInNumber, typeof myAgeInNumber);

var myNameString =  +myName
console.log(myNameString, typeof myNameString);

console.warn("===============================================");
var myResult = 0/0;
console.log(myResult);
console.log(typeof myResult);


var myAge = "31";
console.log(myAge, typeof myAge);
var myAgeInNumber = +myAge; 
console.log(myAgeInNumber, typeof myAgeInNumber);

var myName = "TEST";
console.log(typeof myName);
var myNameString =  +myName
console.log(myNameString, typeof myNameString);


console.warn("===============================================");
var operand1 = 100;
var operand2 = 200;
console.log(operand1 + operand2);

var operand1 = "100";
var operand2 = "200";
console.log(operand1 + operand2);

console.warn("===== Implicit conversion======");
console.log("4"-true); // 4-1

var operand2 = 200;
console.log(operand2, typeof operand2);
var operand2Str =  operand2.toString();
console.log(operand2Str, typeof operand2Str);