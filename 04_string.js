var greet="good morning";
console.log(greet);
var count =greet.length;//to count length of string
console.log(count);
//or
console.log(greet.length);

var char_position=greet.charAt(8);// to show position of pe
console.log(char_position);
//or
console.log(greet.charAt(8));

//concate
var fName="virat";
console.log(fName);
var lname="kohli";
console.log(lname);
var result=fName.concat(" ", lname);
console.log(result);

//replace
var greet="Good Morning bro and sis";
console.log(greet);
var replaceDemo= greet.replace("morning","Evening")
console.log(replaceDemo);

//upper case and lower case
var upper_case=replaceDemo.toUpperCase();
console.log(upper_case);
var lower_case=replaceDemo.toLowerCase();
console.log(lower_case);

//TRim 
console.warn("***************Trim******************")
var greet= "    good morning bro and sis         ";
console.log("Total character:-", greet.length);
var trimResult =greet.trim();
console.log(trimResult.length);

//include
console.warn("***************include******************")
var greet= "good morning bro and sis";
console.log( greet);
console.log(greet.includes("bro"));

//substring
console.warn("***************Substring******************")
var greet= "good morning bro and sis";
console.log( greet);
greet.substring(5);
console.log(greet.substring(5));
console.log(greet.substring(13,17));
//or we can use substring or slice
console.warn("***************Slice******************")
console.log(greet.slice(5));
console.log(greet.slice(13,17));

//split
console.warn("***************Split******************")
var studentList = "sunil, anil,lata,anu,jenney,sonali";
var splitResult= studentList.split("|");
console.log(splitResult);



