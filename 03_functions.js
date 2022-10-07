function anuradha(money){
    console.log(money);
    console.log("  please go to market");
    console.log("  buy some vegetables");
}
anuradha(500);
console.log("//////************************//////");

//or
function anuradha(money){
    
    console.log("  please go to market with Rs:-" ,money);
    console.log("  buy some vegetables");
}
anuradha(500);
console.log("//////**************************//////");

function anuradha(money){
    console.log("please go to market with Rs:-" ,money);
    console.log("buy some vegetables");
    return "vegetable bag";
}
var veg = anuradha(500);
console.log(veg);
console.log("//////**************************//////");