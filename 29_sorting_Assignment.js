console.warn("=============================Assignment on Sorting===================================");
array_roll_numbers= [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ] 
console.log("Given Array is:-",array_roll_numbers);

console.warn("Q.1. Reverse the Array=============================================================");
array_roll_numbers.reverse();
console.log("Reverse array is:-", array_roll_numbers);

console.warn("Q.2.Use the sort() method as it is without any custom sorting logic=========================");
array_roll_numbers.sort()
console.log(array_roll_numbers);

// console.warn("Q.3. Sort the array in ascending order using arrow function=============================================================");
// array_roll_numbers.sort((a,b)=>{
//     return a>b ? 1 : -1;
// })
// console.log("Acending order:-", array_roll_numbers);

console.warn("Q.3. Sort the array in ascending order using arrow function with if condition====================");
array_roll_numbers.sort((a,b)=>{
    if (a>b) {
        return 1;
    } else if (a<b){
        return -1;
        
    }else{
        return 0;
    }
})
console.log("Acending order:-", array_roll_numbers);

console.warn("Q.4.Sort the array in descending order without using reverse() method only use sort()===============================");

array_roll_numbers.sort((a,b)=>{
    return a>b ? -1 : 1;
})
console.log("Descending order:-", array_roll_numbers);

console.warn("Q.5.Sort the array in descending order with using reverse() method==========================");
array_roll_numbers1= [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ] 
const array1=array_roll_numbers1.sort((a,b)=>{
    return a>b ? 1 : -1;
})
//console.log(array1);
array1.reverse()
console.log("Descending Order using reverse method:-",array1);



