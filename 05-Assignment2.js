console.warn("=======================Question.1 using ternary operator===============================");

var greatestNumber = function(num1,num2){
      console.log("Given Numbers are=",num1,num2);
      var gNumber=num1 > num2 ? num1 : num2;
      console.log(`Greater No is= ${gNumber}`);

      console.log("");
}
greatestNumber(10,-10);
greatestNumber(800,899);

console.warn("=======================Question.2 using ternary operator===============================");

var isEvenOdd = function(num3){
    console.log("Given Number is=", num3); 
    var result =  num3%2==0 ? true : false;
    return result;
    //console.log("");
    
}
console.log("Is given number is Even Or odd:-",isEvenOdd(29)); 
console.log("");
console.log("Is given number is Even Or odd:-",isEvenOdd(44)); 
console.log("");
console.log("Is given number is Even Or odd:-",isEvenOdd(0));
console.log("");
console.log("Is given number is Even Or odd:-",isEvenOdd(101));  


console.warn("=======================Question.3===============================");

var evenOddLength= function(word){
    var splitResult=word.split("  ")
    //console.log("Split of given Word is:-", splitResult);
    var wordlength= word.length;
    console.log("Length of given word ", word, "is =" ,wordlength);
 
    var evenOddLength= wordlength%2==0 ? "even": "odd";
    //console.log("result",evenOddLength);
       return evenOddLength; 
    }
console.log("length of Javascript is even or odd:-", evenOddLength("javascript")); 
    console.log("");
console.log("length of Google is even or odd=",evenOddLength("google")); 
    console.log("");
console.log("length of devloper is even or odd=",evenOddLength("Developer")); 
    console.log("");