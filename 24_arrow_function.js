function display() {
    console.log("hellow");
}
display()

//another way to  write function it is known as arrow function
console.warn("======================Arrow function with no arguments====================");
let arrowFunction= () =>{
   console.log("Anuradha");
 }
 arrowFunction()

 console.warn("========================================normal function expression");
 let add= function (n1,n2) {
    return n1+n2;
 }
 console.log(add(10,20));

 console.warn("======================Arrow function with arguments====================");
 let sum = (n1, n2)=> n1+n2;
 console.log(sum(10,20));