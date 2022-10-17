//wap to log even position character from given string
console.warn("============To display string =========");
var givenString = "I love JavaScript";
var totalChar = givenString.length;
for (let index = 0; index <totalChar; index++) {
    var charAt = givenString.charAt(index);
    console.log(charAt); 
}

console.warn("============even character=========");
var givenString = "I love JavaScript";
var totalChar = givenString.length;
for (let index = 0; index <totalChar; index++) {
    if (index%2==0) {
        var charAt = givenString.charAt(index);
        console.log(charAt); 
    }  
}

console.warn("============odd character=========");
var givenString = "I love JavaScript";
var totalChar = givenString.length;
for (let index = 0; index <totalChar; index++) {
    if (index%2!=0) {
        var charAt = givenString.charAt(index);
        console.log(charAt); 
    }  
}


// WAP to just log the vowels from the given string ; a e i o u, A E  I O U 
var givenString = "a I love JavaScript";
console.log("================= Just log Vowels ======================");
for (let index = 0; index < givenString.length; index++) {
    var char = givenString.charAt(index); // a
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
        || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
        console.log(char);
    }
}
 //or

// WAP to just log the vowels from the given string ; a e i o u, A E  I O U 
var givenString = "a I love JavaScript";
console.log("================= Just log Vowels  using lower case======================");
var result="";
var strLowerCase= givenString.toLowerCase();
for (let index = 0; index < strLowerCase.length; index++) {
    var char = strLowerCase.charAt(index); // a
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        //console.log(char);
        result= result+char;
    }
}
console.log(result);


    
