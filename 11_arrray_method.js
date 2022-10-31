let arrayOfNumber=[1,3,7,8,9,3,7]
arrayOfNumber[4]=11;//to update or replace the value
console.log(arrayOfNumber.indexOf(1));
console.log(arrayOfNumber);

console.log(arrayOfNumber.includes(7));//to check given number is present in the array
console.log(arrayOfNumber.includes(9));

//to traverse the array
console.log("====================================");
for (let index = 0; index < arrayOfNumber.length; index++) {
    const element = arrayOfNumber[index];
    console.log(element);
    
}
console.log("====================================");
for (const key in arrayOfNumber) {
     const element = arrayOfNumber[key];
     console.log(element);
}
console.log("==============reverse order======================");

//reverse order
let totalElement=arrayOfNumber.length-1;
for (let index = totalElement; index>=0; index--) {
    const element = arrayOfNumber[index];
    console.log(element);
}

console.log("==============to add eleents on starting======================");
//let arrayOfNumber=[1,3,7,8,9,3,7]
arrayOfNumber.unshift(5)
arrayOfNumber.unshift(0)
arrayOfNumber.unshift(5,17,99)

console.log(arrayOfNumber);

console.log("==============to remove eleents on starting======================");
let arrayOfNumber1=[1,3,7,8,9,3,7]
console.log(arrayOfNumber1);
arrayOfNumber1.shift();
console.log(arrayOfNumber1);


console.log("==============slice()======================");
let arrayOfNumber2=[1,3,7,8,9,3,7];
let slicedElement= arrayOfNumber2.slice(2)
console.log(slicedElement);

let slicedElement1= arrayOfNumber2.slice(1,4)
console.log(slicedElement1);



console.log("==============to remove eleents on anywhere======================");
let arrayOfNumber4=[1,3,7,8,9,3,7]
console.log(arrayOfNumber4);
let splicedElement=arrayOfNumber4.splice(4)//its remove element from index 4
console.log(splicedElement);
console.log(arrayOfNumber4);
console.log("....................................");

let splicedElement1=arrayOfNumber4.splice(2,3)
console.log(splicedElement1);
console.log(arrayOfNumber4);


