
function functionName(fName,mName){
     
    console.warn(" ======1.Answer of First Question====");
    console.log("              Father name:-",fName);
    console.log("              Mother name:-",mName);
 }
var value= functionName("Arun", "Aparna");
console.log("********************************************");

//question 2
function functionCont(firstName,lastName){
     
    console.warn(" ======2.Answer of Second Question====");
    console.log(firstName+lastName);
   
 }
var value2= functionCont("               Anuradha", "Aldar");
console.log("********************************************");

//question 3
function swap_values(num1,num2){
    console.warn(" ======3.Answer of Third Question====");
    console.log("Before Swap values:-",num1,num2);
    temp=num1;
    num1=num2;
    num2=temp;
    console.log("After Swap values:-",num1,num2);
}
var value3 = swap_values("   50", "   60");
console.log("********************************************");

//question 4
console.warn(" ======4.Answer of Forth Question====");
function add_three_numbers(arg1, arg2, arg3){
   
    console.log("New Value:-", arg1+arg2+arg3);
   
}
var value4 = add_three_numbers(100, 200, 300)
var value4 = add_three_numbers("Hellow", " Good", " Morning")
console.log("********************************************");
