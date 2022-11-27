console.warn("==================reverse the String============================");
function operationString(words) {
    console.log(`The Given String is:- ${words}`);
    let newString="";
    for (let index = words.length-1; index >=0; index--) {
        
        //newString=newString+words[index];
        //or
        newString = newString + words.charAt(index)
    }
    console.log(`Reverse String is:- ${newString}`);
}
operationString('TCS the Indian IT Gaint Company')

console.warn("==================count the vovels============================");