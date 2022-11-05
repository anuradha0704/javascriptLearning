console.warn("=======================================Assignment on Arrow Function=======================================");
//console.log("Q.1=====================================================================================");
let arrowFunction= ()=>{
    console.log(`"Good Evening,Today is sunday"`);
}
arrowFunction()

console.warn("Q.2.Multiplication with 3 Arg and no return value=====================================================================");
let multiplication= (n1,n2,n3=1)=> n1*n2*n3;
console.log("Multiplication of (5,5,2) is:-",multiplication(5,5,2));

console.log("");
console.log("Multiplication of (10,4) with default value is:-",multiplication(10,4));

console.warn("Q.3.addition with 5 arg with return value=====================================================================");
let addition= (n1,n2,n3,n4,n5)=> {
    return n1+n2+n3+n4+n5;
}    
//console.log("Addition of (100,100,200,349,756) is:-",addition(100,100,200,349,756));
console.log("");
//console.log("New Arrow function is:-",addition("I am", " Learning", " ES6", " Features", " in depth"));

//or
let additionOfNew= addition(100,100,200,349,756);
console.log(`Addition is:-${additionOfNew}`); 

let 