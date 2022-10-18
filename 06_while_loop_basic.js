console.warn("1.Display numbers=======================");
var result="";
var count=0;
while (count<=5) {
    count++;
    result=result+" " +count
}
console.log(` Numbers are:-${result}`);

// console.warn("1.Display numbers from 10 to 0=======================");
// var count = 10; // initialization
// while (count>=0) { // condition
//     console.log(count); 
//     count--; // update 

// }
//or

console.warn("1.Display numbers from 10 to 0=======================");
var result="";
var count=11;
while (count>=1) { // condition
    //console.log(count); 
    count--; // update 
    result=result+" " +count
}
console.log(` Numbers are:-${result}`);

console.warn("1.Display numbers from 10 to 0=======================");
var table = 5;
 var count = 1;
 while(count <= 10)
 {
    var res = table * count;
    console.log(res);
    count++;
 }