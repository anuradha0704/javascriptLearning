const arrayOfNumbers = [2,3, 5,4,6,1];

let sum= arrayOfNumbers.reduce((value, runningTotal) =>{

    return value+runningTotal;
})
console.log(sum);

console.warn("Addition=============================");
const arrayOfNumbers1 = [2,3, 5,4,6,1];

let sum1= arrayOfNumbers.reduce((value, runningTotal) =>{

    return value+runningTotal;
},100)
console.log(sum1);


console.warn("multiplication========================");
let mul= arrayOfNumbers.reduce((value, runningTotal) =>{

    return value*runningTotal;
})
console.log(mul);


console.warn("average=============================");

let average= arrayOfNumbers.reduce((value, runningTotal) =>{

    return (value+runningTotal)/arrayOfNumbers.length;
})
console.log(average);