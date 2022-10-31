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

console.log("");
console.warn("Q.5.All odd Numbers ===============================================================================================");
var result = '';
for(num of array_numbers)
{
    if (num %2!=0) 
    {
       result=result+" "+num;
    }
        
}
console.log("Odd Numbers are:-",result)

console.log("");
console.warn("Q.6. Even position Numbers ===============================================================================================");
var result = '';
for (let index = 0; index < array_numbers.length; index++) 
{
    if (index%2==0) 
    {
        const element=array_numbers[index]
       result=result+" "+element;
    }
        
}
console.log("Even position numbers are:-",result)

console.log("");
console.warn("Q.7. odd position Numbers ===============================================================================================");
var result = '';
for (let index = 0; index < array_numbers.length; index++) 
{
    if (index%2!=0) 
    {
        const element=array_numbers[index]
       result=result+" "+element;
    }
        
}
console.log("Odd position numbers are:-",result)