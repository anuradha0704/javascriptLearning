'use strict'

let person={
    fullName:"Mohit Aglawe",
    age:31,
    city:"pune",
    pin:410210,
    state:"MH",
    isMarried:true
}

// let fullName=person.fullName;
// let city=person.city;
// let pin=person.pin
// let state=person.state;

//destructuring means extraction property in one line instead of writing above code we can write below code
let {fullName,city,pin,isMarried} = person;
console.log(fullName,city,pin,isMarried);

console.warn("======For array=============================================");
let arrayOfNames= ["Momu","Golu", "Chottu","ponu","dholu"]

//let element1= arrayOfNames[0];
//let element1= arrayOfNames[1];
//let element1= arrayOfNames[2];
//let element1= arrayOfNames[3];

let [element1, element2, element3, element4]= arrayOfNames;
console.log(element1, element2, element3, element4);
