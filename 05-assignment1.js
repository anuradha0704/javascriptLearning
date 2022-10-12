console.warn("===============Question1==================");

var wordLengthSquare= function(word){
var wordLenth = word.length;
console.log("Word length of ",word, " = " ,wordLenth);
return wordLenth * wordLenth;

    
}
console.log("Square lenth of word javascript=",wordLengthSquare("javascript")); 
console.log("");
console.log("Square lenth of word google=",wordLengthSquare("google")); 
console.log("");
console.log("Square lenth of word devloper=",wordLengthSquare("Devloper")); 
console.log("");

console.warn("==========================Question2=============================");
var stringNew= function(){
    var stringGiven="I am Angular Developer"
    console.log("Given string is:",stringGiven);
    var stringLength= stringGiven.length;
    console.log("Length of Given string is:",stringLength);

    console.log("");
    var splitResult= stringGiven.split(" ");
    console.log("Split of given String:-",splitResult);
    var totalWord=splitResult.length
    console.log("Total words avilable in the string:-", totalWord);

    console.log("");
    var divide=stringLength / totalWord;
    console.log("length of string /  words in the string=", divide);

    console.log("");
    var divide=stringLength * totalWord;
    console.log("length of string * words in the string=", divide);


}
stringNew();
