var firstName="Sweety";
console.warn("Before Swapping");
console.log("First Name:-", firstName);

var secondName="Cutie";
console.log("Second Name:-", secondName);

console.log("");
console.warn("After Swapping");

var temp=firstName;
firstName=secondName;
secondName=temp;
console.log("First Name:-" ,firstName);
console.log("Second Name:-" ,secondName)

console.log("*********************************************************************************************");

console.warn("Swapping Three Variable Value");
//console.log("");

var num1="100" , num2="200", num3="300";
console.log("Before Swapping Number:-", num1,num2,num3);

var temp1=num1;
num1=num2;
var temp2=num2;
num2=num3;
num3=temp1
console.log("After Swapping Number:-", num1,num2,num3);