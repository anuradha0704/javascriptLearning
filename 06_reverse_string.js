console.warn("======reverse string=============");
var myName="anuradha"
var lenthStr = myName.length - 1; // 
var reverseStr = "";
for (let index = lenthStr; index >= 0; index--) {
   // console.log(myName.charAt(index));
    reverseStr = reverseStr + myName.charAt(index)
}
console.log(`Reverse string is :-${reverseStr}`);