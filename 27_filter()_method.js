const arrayOfNumbers = [2,3, 5,4,6,1];

console.warn("filter method");
let newArray = arrayOfNumbers.filter((element) =>{
    return element>=4;
})
console.log(newArray);

//const arrayOfNumbers = [2,3, 5,4,6,1];
console.log("================differance bet map and filter");

console.warn("map method");
let newArray1 = arrayOfNumbers.map((element) =>{
    return element>=4;
})
console.log(newArray1);