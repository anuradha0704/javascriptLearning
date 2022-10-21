console.warn("=====================================Q.1. Vehical Details-class-Constructor ===================================");

 class Vehical{
    constructor(vehicalName, vnumber,vColor, prize,model,condition){
        this.vehicalName=vehicalName;
        this.vnumber=vnumber;
        this.vColor=vColor;
        this.prize=prize;
        this.model=model;
        this.condition=condition;
        };
 }
 let vehicalDetails= new Vehical("Container", "MH46BM7071","Red", "17lack", "2017", "Very Good" );
//console.log(`Vehical Details:- ${vehicalDetails}`);
console.log(vehicalDetails);

let vehicalDetails1= new Vehical("Unicorn", "MH46BM3737","Black", "80 Th", "2019" ,"Good" );
console.log(vehicalDetails1);

console.warn("=====================================Q.2.College details-class-constructor========================");

class College{
    constructor(collegeName, address, pincode, fees, review ){
        this.collegeName=collegeName;
        this.address=address;
        this.pincode=pincode;
        this.fees=fees;
        this.review=review;
    }

}

let collegeDetails= new College("ACPCE","Navi Mumbai", "410210", "1lack","Excellent" );
console.log(collegeDetails);

let collegeDetails1= new College("COEP","Pune", "412356", " 50 Th","Very Good" );
console.log(collegeDetails1);

console.warn("=====================================Q.3.for_in_loop ===============================================");

function traverse_object(arg1){
    for (const key in collegeDetails) {
       if (collegeDetails.hasOwnProperty.call(collegeDetails, key)) {
           const element = collegeDetails[key];
           console.log(`${key} ${element}`);
           
       }
    }
   }
   traverse_object(collegeDetails);



