console.warn("Q.1. Reverse String with ignoring Spaces=========================================" );
console.log("");

function reverseString(givenString)
{
   console.log(`Given String is:- ${givenString}`);

   var lenthStr = givenString.length - 1; // 
   var reverseStr = "";
   for (let index = lenthStr; index >= 0; index--) {
      // console.log(myName.charAt(index));
      var char = givenString.charAt(index)
      
      if (char!=" ") {
        reverseStr = reverseStr + char 
      }
       
   }
   console.log(`Reverse string is :-${reverseStr}`);
}
reverseString("Hard work always pays back")
console.log("");
reverseString("Soon i will be Angular IT champ")
console.log("");