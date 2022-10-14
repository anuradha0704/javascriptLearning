console.warn("==================Q.1.Even and Odd functions==================");

var isEvenOdd = function(number){
    if(number%2==0){
        console.log(`Given number ${number} is:- Even Number`);
    }
    else{
        console.log(`Given number ${number} is:- Odd Number`);
    }
}
isEvenOdd(45);
console.log("");
isEvenOdd(70);
console.log("");
isEvenOdd(67);
console.log("");
isEvenOdd(98);
console.log("");

console.warn("==================Q.2.Eligible for Vote==================");
var eligibleForVote = function(age){
    if(age>=18){
        console.log(`${age} age is Eligible for Vote.`);
    }
    else{
        console.log(`${age} age is not Eligible for Vote.`);
    }
}
eligibleForVote(18);
console.log("");
eligibleForVote(20);
console.log("");
eligibleForVote(17);
console.log("");
eligibleForVote(40);
console.log("");
eligibleForVote(14);
console.log("");

console.warn("==================Q.3.String==================");
 var stringNew="JavaScript-ES6";
 console.log("Given string is:-",stringNew);
 var stringLength=stringNew.length;
if(stringLength>=10){
    console.log("Is String contain more than 10 character:-Yes");

}
else{
    console.log("is String contain more than 10 character:-No");
}

console.warn("==================Q.4.String starts with==================");

var stringNew =function(value){
    //var stringstartWith =value.startsWith("java")
if(value.startsWith("Java")){
    console.log(`* ${value} :-Yes, given string start with "java"`);
}
else{
    console.log(`* ${value} :-No,given string not start with "java"`);
}
}
stringNew("Java Script language");
console.log("");
stringNew("Java is my fav");
console.log("");
stringNew("My name is Aradhya");

