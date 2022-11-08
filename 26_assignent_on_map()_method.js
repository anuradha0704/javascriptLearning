console.warn("=========================Assignment on Map() Method===================================");
const array_numbers=[20,11,40,25,23,11,9,31,60,2,19]
console.log("Given array is:-",array_numbers);

console.warn("Q.1.Add 10into each element=========================================================");
let addTen=array_numbers.map((element)=>{
     return element+10
})
console.log(addTen);

console.warn("Q.2.Square the each Array element=========================================================");
let square=array_numbers.map((element)=>{
     return element*element
})
console.log(square);


console.warn("Q.3.Add index value into each Array element=========================================================");
let addIndexValue=array_numbers.map((element,index)=>{
     return element+ index
})
console.log(addIndexValue);