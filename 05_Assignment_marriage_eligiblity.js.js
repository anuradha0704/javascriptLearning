console.warn("================Q.1.Male Marriage Eligiblity using ternary operator================");

var maleMarriageEligibility = function(gender, age, boyName){
  
  var eligiblityResult = gender=="male" && age>=21
    ? `Hey ${boyName} you are eligible for Marriage` 
    : `Hey ${boyName} you are not eligible for Marriage`;
  console.log("Message for User:-" ,eligiblityResult);
}
maleMarriageEligibility("male", 25 , "Billgates");
console.log("");
maleMarriageEligibility("female", 25 , "jennifer");
console.log("");
maleMarriageEligibility("male", 19 , "Stew Jobs");
console.log("")

console.warn("====================Q.2.female Marriage Eligiblity using if block=================");
var femaleMarriageEligibility = function(gender, age, girlName){
if(gender=="female" && age>=18){
  console.log(`Message For User:-Hey ${girlName} you are eligible for Marriage`);

}
else{
  console.log(`Message for user:-Hey ${girlName} you are not eligible for Marriage`);
}
}
femaleMarriageEligibility("female", 16, "Jenifer");
console.log("");
femaleMarriageEligibility("female", 27, "Malinda Gates");
console.log("");
femaleMarriageEligibility("Male", 27, "Bills Gates");



//var result = grad_score >= 70 || hsc_score >= 80 || ssc_score > 90  // false || true
         //   ? `Congrates ${candidate_name} you are eligible for TCS interview`
          //  : "Unfortunately you are not eligible for interview";
        //console.log(result);