var StringHandsOn = function(){
    console.warn("====================Question.1=====================");
    var string=("       Hey you are doing Good, keep it up     ");
    console.log("Given String is:-",string);

    console.warn("====================Question.2=====================");
    console.log("Length of given string:-", string.length);

    console.warn("====================Question.3=====================");
    var trimResult=string.trim();
    console.log("After Trim string is:-",trimResult);

    console.warn("====================Question.4=====================");
    var length_of_Gstring= string.length;
    console.log("Length of Original string:-",length_of_Gstring);

    var length_of_Tstring= trimResult.length;
    console.log("Length of Trim string:-",length_of_Tstring);

    var newlength=length_of_Gstring  - length_of_Tstring;
    console.log("count of removed spaces:-", newlength);

    console.warn("====================Question.5=====================");
    console.log("First character after trim:-", trimResult.charAt(0));
    console.log("last character after trim:-", trimResult.charAt(33));

    console.warn("====================Question.6=====================");
    var splitResult= trimResult.split(" ");
    console.log("Split of given String:-",splitResult);
    console.log("Total words avilable in the string:-", splitResult.length);

    console.warn("====================Question.7=====================");
    console.log(`index of word "good" from given string :-  ${trimResult.indexOf("good")}`);
    
    console.warn("====================Question.8=====================");
    console.log("Substring Starting from index 22 using substring:-", trimResult.substring(22));
    console.log("Substring Starting from index 22 using slice:-", trimResult.slice(22));

    console.warn("====================Question.9=====================");
    console.log(`checking for string ends with "up":- , ${trimResult.includes("up")}`);
    console.warn("====================Question.10=====================");
    console.log(`checking for string starts with "hey":- , ${trimResult.includes("Hey")}`);
}
StringHandsOn();