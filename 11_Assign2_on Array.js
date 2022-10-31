console.warn("=================================================Assignent on Array====================================================");
const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given Array Numbers are:-${array_numbers}`);

console.log("");
console.warn("Q.1.Total Element Available================================================================================================");
 let arrayLength=array_numbers.length
console.log(`Length of Given Array is:-${arrayLength}`);

console.log("");
console.warn("Q.2. First and last Element ===============================================================================================");
console.log("First Element of Given Array is:-",array_numbers[0]);
console.log("Last Element of Given Array is:-",array_numbers[array_numbers.length-1]);

console.log("");
console.warn("Q.3.Third last Element ===============================================================================================");
console.log("Third Last Element of Given Array is:-",array_numbers[array_numbers.length-3]);


console.log("");
console.warn("Q.4.All Even Numbers ===============================================================================================");
let result="";
for(num of array_numbers)
{
    if (num %2==0) 
    {
       // console.log("Even Numbers are:-",num);
       result=result+""+num;
    }
}
