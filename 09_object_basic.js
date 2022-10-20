let variable_name='';

let mohitPerson={
    fullName:"Sachin Tendulkar",
    isMarried:true,
    age:42,
}


let personDetails={
    fullName:"Sachin Tendulkar",
    
    isMarried:true,
    age:42,
    address:{
        street:"As Club",
        pin_code: 123456,
        city:"Pune",
        state:"MH"
    },
    eat:function(){
        console.log("Iam vegeterian");
    },
    walk: function(){
        console.log("i do walk everyday");
    }
    
}
personDetails.eat();

  
console.log(personDetails.address);
personDetails.pincode=410210 // to add new property
personDetails.profession= "cricket"; //to add new property

delete personDetails.age; //to delete property

personDetails.fullName="Sachin Ramesh Tendulkar"// to update the value
console.log(personDetails);


let personFullName=personDetails.fullName// to access only one property
console.log(personFullName);
//or
console.log(personDetails.fullName);

let marrageStatus=personDetails.isMarried// to access only one property
console.log(marrageStatus);

//or
console.log(personDetails["age"]); // to access anathor way

//
let address={
    street:"As Club",
    pin_code: 123456,
    city:"Pune",
    state:"MH"
}




console.log("============================================");
let obj={
    value:function(){

    }
}