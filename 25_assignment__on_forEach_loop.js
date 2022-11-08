console.warn("===================Assignent using forEach() with arrow function and callback==========================");
const array_numbers= [1,-7,40,502,-77,91,0,108,89,-601]
console.log("Given Array is:-", array_numbers);

console.warn("Q.1.log the array element with its index value==============================================================");
array_numbers.forEach((currentValue, index)=>{
   console.log(`Element: ${currentValue},       Index value: ${index}`)
})

console.warn("Q.2.find  the Positive numbers==============================================================");
result="";
array_numbers.forEach((currentValue) => {
    if (currentValue>=0) {
       result=result +" " +currentValue
    
    }
})
console.log("Positive Numbers are:-",result)

console.warn("Q.3.find  the Negative numbers==============================================================");
result="";
array_numbers.forEach((currentValue) => {
    if (currentValue<0) {
       result=result +" " +currentValue
    
    }
})
console.log("Negative Numbers are:-",result)

console.warn("Q.4.find  the Even numbers==============================================================");
result="";
array_numbers.forEach((currentValue) => {
    if (currentValue%2==0) {
       result=result +" " +currentValue
    
    }
})
console.log("Negative Numbers are:-",result)


console.warn("Q.5.find  the sum of all numbers from array number==============================================================");
sum=0;
array_numbers.forEach((currentValue) => {
    sum=sum+currentValue
})
console.log("Sum of All Numbers from array:-",sum)


console.warn("Q.6.Only Even Positioned Array Value==============================================================");
result="";
array_numbers.forEach((currentValue, index) => {
    if (index%2==0) {
       result=result +" " +currentValue
    
    }
})
console.log("Only Even Positioned  Numbers from array :-",result)

console.warn("Q.7.Only Odd Positioned Array Value==============================================================");
result="";
array_numbers.forEach((currentValue, index) => {
    if (index%2 !=0) {
       result=result +" " +currentValue
    
    }
})
console.log("Only Odd Positioned  Numbers from array :-",result)

console.warn("Q.8.Only Odd Positioned Array Value if it is negative==============================================================");
result="";
array_numbers.forEach((currentValue, index) => {
    if (index%2 !=0 && currentValue<0) {
       result=result +" " +currentValue
    
    }
})
console.log("Only Odd Positioned  Numbers if It is Negative from array :-",result)