function operationString(words) {
    console.log(`The Given String is:- ${words}`);
    let newString="";
    for (let index = words.length-1; index >=0; index--) {
        //console.log(index);
        newString=newString+words[index];
        //console.log(newString);
    }
    console.log(`Reverse String is:- ${newString}`);
}
operationString('TCS the Indian IT Gaint Company')

//program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
        
    }
    console.log(newString);
}
reverseString("hello")