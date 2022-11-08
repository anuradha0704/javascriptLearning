console.warn("==========================Assignment on filter() method=================================");
const array_numbers=[20,1,40,25,37,49,9,90,60,2,19];
console.log("Given Array is:-",array_numbers);
console.log("");

console.warn("Q.1.Find out numbers greater than 50===========================================================");
let newArray = array_numbers.filter((element) =>{
    return element>50;
})
console.log(newArray);
console.log("");

console.warn("Q.2.Find out all even numbers===========================================================");
let evenNumber = array_numbers.filter((element) =>{
    return element%2==0;
})
console.log(evenNumber);
console.log("");

console.warn("Q.3.Find out all odd numbers===========================================================");
let oddNumber = array_numbers.filter((element) =>{
    return element%2!=0;
})
console.log(oddNumber);
console.log("");

console.warn("Q.4.Find out all  numbers multiple of 5===========================================================");
let multipleOfNumber = array_numbers.filter((element) =>{
    return element%5==0;
})
console.log(multipleOfNumber);
console.log("");

console.warn("Q.5.Find out all  numbers between 20 and 50===========================================================");
let betweenOfNumber = array_numbers.filter((element) =>{
    return element >=20 && element<=50
})
console.log(betweenOfNumber);
console.log("");