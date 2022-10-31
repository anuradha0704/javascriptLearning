console.warn("======================Assignment on Array=========================================");
let fruits_seasonal=["banana", "orange","Apple","mango","Water melon"]
console.log("Given Array is:-",fruits_seasonal);

// console.warn("Q.1.================================================================================");
// let firstElement=fruits_seasonal.shift(0);
// console.log("First Element of given Array is:-", firstElement);
// let lastElement= fruits_seasonal.pop();
// console.log("Last element of given Array is:-",lastElement);

//or

console.warn("Q.1. First and last Element ================================================================================");

let fruitsSeasonal=["banana", "orange","Apple","mango","Water melon"]
console.log("First Element of Given String is:-",fruitsSeasonal[0]);
console.log("Last Element of Given String is:-",fruitsSeasonal[fruitsSeasonal.length-1]);

console.warn("Q.2.Add papaya before element banana================================================================================");
fruitsSeasonal.unshift("Papaya")
console.log("New Array is:-",fruitsSeasonal);

console.warn("Q.3.Remove Mango from array================================================================================");
fruitsSeasonal.splice(4,1);
console.log(fruitsSeasonal);

console.warn("Q.4.Add element Pineapple at the last position===================================================================");
fruitsSeasonal.splice(fruitsSeasonal.length,1,"Pineapple")
console.log(fruitsSeasonal);

console.warn("Q.5.Add element dragan fruit before waterMelon===================================================================");
fruitsSeasonal.splice(fruitsSeasonal.indexOf("waterelon")-1,0,"Dragon Fruit")
console.log(fruitsSeasonal);

console.warn("Q.6.Replace orange by Kiwi===================================================================");
fruitsSeasonal.splice(fruitsSeasonal.indexOf("orange"),1,"kiwi")
console.log(fruitsSeasonal);

console.warn("Q.7.Display first Four Element===================================================================");
console.log(`logging the elements starting from index 1 to 4 is:- ${fruitsSeasonal.slice(1,5)}`);
//console.log(fruitsSeasonal);


console.warn("Q.8.last three Element===================================================================");
let newArray = fruitsSeasonal.slice(fruitsSeasonal.length-3);
console.log(newArray);






