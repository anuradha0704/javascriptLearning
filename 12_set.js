let setOfNumbers = new Set()
console.log("Type of set is:-",typeof setOfNumbers)
console.log("Adding eleent into set collection================================");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);
console.log(setOfNumbers);

console.log("Adding duplicate element or same element into set collection================================");;
setOfNumbers.add(7);
console.log(setOfNumbers);

console.log("====== Checking number elements available into set =======");
console.log(setOfNumbers.size);

console.log("====== Deleting element 9 ===============================================================");
setOfNumbers.delete(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);

console.log("====== Check whether element 7 available into set or not =======");
let isAvailable = setOfNumbers.has(7);
console.log(isAvailable);
console.log(setOfNumbers.has(9));

console.log("======to empty the set =======");
//setOfNumbers.clear();
//console.log(setOfNumbers);

console.log("====== Traversing set =======");
for (const element of setOfNumbers) {
    console.log(element);
}

// console.log("to delete duplicate values from array using loop")
// for (let index = 0; index < arrayNumber.length; index++) {
//     const element = arrayNumber[index];
//     let newSetValues=setNumber.add(element)
    
// }
// console.log(newSetValues);


console.log("to delete duplicate values from array");
 let arrayNumber=[2,3,4,5,6,3,5];
 let setNumber= new Set(arrayNumber);
 console.log(setNumber);

 

 console.log("to delete duplicate values from array using spread operator");
let arrayNumber1=[2,3,4,5,6,3,5];
let arrayUniqueNumber= [...new Set(arrayNumber1)];
console.log(arrayUniqueNumber);

