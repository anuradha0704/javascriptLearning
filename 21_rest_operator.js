'use strict'

console.warn("=====================rest operator=====================");
function display(name, ...myName) {
    console.log(name,myName);
}
display("Anil",31, "city", true)

console.warn("=====================Default value=====================");
function divide(x, y=1) //y=1 is default value we can set any default value
{
    console.log(x/y);
}
divide(10);
divide(10,5);