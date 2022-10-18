console.warn("Q.1. Total numbers of vowels from string" );
console.log("");

var string ="I am Very Good IT Developer"
console.log(`Given string is:- ${string}`);
var strLowerCase= string.toLowerCase();
//console.log(`Given string is in lower case:- ${strLowerCase}`);

var vowels= "aeiou";// to count
var count = 0;// to count

var result="";

for (let index = 0; index < string.length; index++) {
    var char = strLowerCase.charAt(index); // a
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
       
        result= result + " " +char;
        
    }
    //to count
    if(vowels.includes(strLowerCase.charAt(index)))
    {
    count=count + 1;
       
    }
}
console.log("Vowels from given string:-", result);
console.log("count of Vowels from given string:-", count);

//q.2
console.warn("Q.2. Sum of cube of nubers from 1 to 5" );
console.log("");
var cube=1;
var addition=0;
for (let index = 1; index <=5; index++) {
    cube= index * index * index;
    addition=addition+cube;
    
}
console.log(`Sum Of cube from 1 to 5 number is:- ${addition}`);
console.log("");



//q.3
console.warn("Q.3. Only Odd Position character from given character" );
console.log("");

function oddPositionChars(givenstring)
{
    console.log(`Given String is:- ${givenstring}`);
    loString=givenstring.toLowerCase();

    
    var result="";

    for (let index = 0; index < loString.length; index++) 
    {
        var char = loString.charAt(index);
        if (index%2!=0 && char!=" ")
        {
           //console.log(char);
            result= result + char;
            
        }
    } 
    console.log(`Odd character from given String are:- ${result}`);   
}
oddPositionChars("Hard work always pays back")
console.log("");
oddPositionChars("Soon i will be Angular IT champ")
console.log("");