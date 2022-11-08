console.warn("================for Each loop============================");
const arrayNumbers=[10,20,30,40,20,10];
arrayNumbers.forEach(function(currentValue, index, array){
console.log(currentValue, index, array);
})

console.warn("================arrow function with for each loop=============");

const arrayNumbers1=[10,20,30,40,20,10];
arrayNumbers1.forEach((currentValue, index, array) => {
    console.log(currentValue, index, array);
})

//index and array is not compulsary it is optional
console.warn("============or====arrow function with for each loop=============");

const arrayNumbers2=[10,20,30,40,20,10];
arrayNumbers2.forEach((currentValue, index) => console.log(currentValue, index))

console.warn("============to find negative numbers=============");

const arrayNumbers3=[10,-20,30,40,20,10,-30];
arrayNumbers3.forEach((currentValue, index) => {
    if (currentValue<0) {
        
    console.log(currentValue, index)
    }
})

console.warn("============to traverse on set using for each loop=============");
const setOfNumber = new Set(arrayNumbers)
setOfNumber.forEach((value)=>{
    console.log(value)
})

console.warn("============to traverse on map using for each loop=============");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );




