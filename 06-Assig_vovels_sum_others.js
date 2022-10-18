//q.1
console.warn("Q.1. Total numbers of vowels from string" );
console.log("");

var string ="Good Morning IT Champ"
console.log(`Given string is:- ${string}`);
var strLowerCase= string.toLowerCase();
console.log(`Given string is in lower case:- ${strLowerCase}`);

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

// var givenString ="Good Morning IT Champ";
// var str= givenString.toLowerCase();
// var vowels= "aeiou";
// var count = 0;

// for (let index = 0; index <str.length; index++) {
    
//     var spl= str.charAt(index);
//     if(vowels.includes(str.charAt(index)))
//     {
//     count=count + 1;
       
//     }
//     console.log(count);   
// }
// console.log("Count of vowels in given string is:-",count );

//q.2
console.warn("Q.2. Total numbers of vowels from string (function)" );
console.log("");

function vowelsCount() 
{
    var string ="I Love JavaScript and Anugular"
    console.log(`Given string is:- ${string}`);
    var strLowerCase= string.toLowerCase();
    console.log(`Given string is in lower case:- ${strLowerCase}`); 

    var vowels= "aeiou";// to count
    var count = 0;// to count

    var result="";

    for (let index = 0; index < string.length; index++) 
    {
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
}
vowelsCount();
console.log("");

//q.3
console.warn("Q.3. Only Even Position character from given string" );
console.log("");

function evenPositionChars(givenstring)
{
    console.log(`Given String is:- ${givenstring}`);
    loString=givenstring.toLowerCase();

    
    var result="";

    for (let index = 0; index < loString.length; index++) 
    {
        var char = loString.charAt(index);
        if (index%2==0 && char!=" ")
        {
           //console.log(char);
            result= result + char;
            
        }
    } 
    console.log(`Even character from given String are:- ${result}`);   
}
evenPositionChars("Hard work always pays back")
console.log("");
evenPositionChars("Soon i will be Angular IT champ")
console.log("");


console.warn("Q.4. Only Odd Position character from given character" );
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