console.warn("==============================================Assignment on object cloning=========================================");
let bank_sbi={
    bank_name:"State Bank Of India",
    Manager_name:"A.Y.Aldar",
    contact_no:8169417726,
    bank_time : "10:00am To 05:00pm"
}
console.log("Bank Details Are:-");
console.log(bank_sbi);

let bank_location = {
    street:"Kharghar",
    city:"Navi Mumbai",
    pinCode:"410210",
    state:"Maharashtra"
}
console.log("Bank Location Details Are:-");
console.log(bank_location);
console.log("");

console.warn("Q.3.Cloning bank_sbi details & bank_location details using object.assign() ");
let bank_sbi_details_with_location = Object.assign({},bank_sbi,bank_location)
console.log(bank_sbi_details_with_location);
console.log("");

console.warn("Q.3.Cloning bank_sbi details & bank_location details using spread operator ");
let bank_detail={...bank_sbi,...bank_location}
console.log(bank_detail);

console.warn("Q.4.rate of interest with properties ");
let rate_of_interest ={
    home_lone_interest : "11.5%",
    personal_lone_interest: "12.5%",
    due_interest:"13%"
}
console.log(rate_of_interest);

console.warn("Q.4.Merging all Properties ");
let bank_details={...bank_sbi,...bank_location,...rate_of_interest}
console.log(bank_details);
//console.table(bank_details);

console.warn("Q.5.traverse using loop ");

for (const key in bank_details) {
        if (Object.hasOwnProperty.call(bank_details, key)) {
            const element = bank_details[key];
            console.log(`${key} : ${element}`);
        }
    }



// let bank_sbi = {
//     bank_name:"State Bank Of India",
//     Manager_name:"S.S.Patil",
//     contact_no:+919096949202,
//     bank_time : "10:00am To 05:00pm"
// }

// let bank_location = {
//     street:"Pune Road",
//     city:"Solapur",
//     pinCode:"413305",
//     state:"Maharashtra"
// }

// let bank_sbi_details = Object.assign({},bank_sbi,bank_location)

// console.log(`1. Using string template result ${bank_sbi_details}`); 

// console.warn("====================== Using the  Object.assign () Method  =================================");
// console.table(bank_sbi_details);

//  let bank_detail={...bank_sbi,...bank_location}

// console.warn("===================== Using the Spared Operator {...} ==================================");

// console.table(bank_detail);

// let rate_of_interest ={
//     home_lone_interest : "11.5%",
//     personal_lone_interest: "12.5%",
//     due_interest:"13%"
// }

//  let bank_details={...bank_sbi,...bank_location,...rate_of_interest}

//  console.warn("===================== Marge Step-1,Step-2,Step-3 Bank Details ==================================");

// console.table(bank_details);

// console.warn("===================== Traverse by using For in Loop the Bank Details ==================================");

// for (const key in bank_details) {
//     if (Object.hasOwnProperty.call(bank_details, key)) {
//         const element = bank_details[key];
//         console.log(`${key} : ${element}`);
//     }
// }