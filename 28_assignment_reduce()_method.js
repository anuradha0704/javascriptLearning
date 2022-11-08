console.warn("==========================Assignment on reduce() method=================================");
const arrayOfNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log("Given Array is:-",arrayOfNumbers);
console.log("");

console.warn("Q.1.Find the Sum of all Numbers===========================================================");
let sum= arrayOfNumbers.reduce((value, runningTotal) =>{

    return value+runningTotal;
})
console.log("Sum of All Numbers:-",sum);
console.log("");
console.warn("Q.2.Find the Sum of all even numbers===========================================================");
let evenNumber = arrayOfNumbers.filter((element) =>{
    return element%2==0;
})
console.log("");
console.log("Even number are:",evenNumber);

let sumOfEven= evenNumber.reduce((value, runningTotal) =>{

    return value+runningTotal;
})
console.log("Sum of All Numbers:-",sumOfEven);