console.warn("=====================================Q.1. Vehical Details-class-Constructor ===================================");

function Vehicals(vehicalName, vnumber,vColor, prize,model,condition){
this.vehicalName=vehicalName;
this.vnumber=vnumber;
this.vColor=vColor;
this.prize=prize;
this.model=model;
this.condition=condition;
};

let vehicalDetails= new Vehicals("Container", "MH46BM7071","Red", "17lack", "2017", "Very Good" );
//console.log(`Vehical Details:- ${vehicalDetails}`);
console.log(vehicalDetails);

let vehicalDetails1= new Vehicals("Unicorn", "MH46BM3737","Black", "80 Th", "2019" ,"Good" );
console.log(vehicalDetails1);

console.warn("=====================================Q.2.College detis===============================================================");

function College(collegeName, address, pincode, fees, review ){
    this.collegeName=collegeName;
    this.address=address;
    this.pincode=pincode;
    this.fees=fees;
    this.review=review;


};
let collegeDetails= new College("ACPCE","Navi Mumbai", "410210", "1lack","Excellent" );
console.log(collegeDetails);

let collegeDetails1= new College("COEP","Pune", "412356", " 50 Th","Very Good" );
console.log(collegeDetails1);

console.warn("=====================================Q.3. College Details-class-Constructor ===================================");

function traverse_object(object){
 for (const key in College) {
    if (object.hasOwnProperty.call(College, key)) {
        const element = College[key];
        console.log(`${key} ${element}`);
        
    }
 }
}
traverse_object(collegeDetails);






// for (const key in mohitPerson) {
//     if (Object.hasOwnProperty.call(mohitPerson, key)) {
//         const element = mohitPerson[key];
//         console.log(element);
        
//     }
// }















