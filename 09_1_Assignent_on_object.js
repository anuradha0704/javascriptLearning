console.warn("====================================Assignment on Object=========================================");
console.log("Q.1.creating object with Some properties of teachers");
//q.1
let teacher={


    teacherName:"Aradhya Aldar",
    collegeName:"ACPCE Mumbai",
    experiance: "5 years",
    post:"Asst. Prof"

};
console.log(teacher);
console.warn("....................................................................................................................");

//q.2
console.log(`Q.2.Nested object "degree"`);
let teacher1={
    teacherName:"Aradhya Aldar",
    collegeName:"ACPCE Mumbai",
    experiance: "5 years",
    post:"Asst. Prof",
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        Master_in:"EXTC"

    }

};
console.log(teacher1);
console.log(teacher1.degrees);

console.warn("....................................................................................................................");
//q3
console.log(`Q.3.Nested object "Certificates"`);
let teacher2={
    teacherName:"Aradhya Aldar",
    collegeName:"ACPCE Mumbai",
    experiance: "5 years",
    post:"Asst. Prof",
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        Master_in:"EXTC"    
    },
    certificate:{
        certificate_1:"Hacker Rank Participation",
        certificate_2:"Certificate in Advance Programming",
        certificate_3:"Certificate in Machine Learning"
    }

};
console.log(teacher2);
console.log(teacher2.certificate);

console.warn("....................................................................................................................");

//q4
console.log(`Q.4.concating all degrees`);
let teacher3={
    teacherName:"Aradhya Aldar",
    collegeName:"ACPCE Mumbai",
    experiance: "5 years",
    post:"Asst. Prof",
    degrees:{
            engineering:"CSC",
            PHD:"Adv Computing",
            Master_in:"EXTC" ,

        details: function(){
            let concateDegree = `Teachers Available Degrees Are:-${this.engineering}, ${this.PHD}, ${this.Master_in}`
            return concateDegree;
         }   
    },
    certificate:{
        certificate_1:"Hacker Rank Participation",
        certificate_2:"Certificate in Advance Programming",
        certificate_3:"Certificate in Machine Learning"
    }
   

};

console.log(teacher3.degrees.details()); 
//console.log(teacher3.certificate);

console.warn("....................................................................................................................");

//q5
console.log(`Q.5 Add New Property`);
let teacher4={
    teacherName:"Aradhya Aldar",
    collegeName:"ACPCE Mumbai",
    //experiance: "5 years",
    //post:"Asst. Prof",
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        Master_in:"EXTC"    
    },
    certificate:{
        certificate_1:"Hacker Rank Participation",
        certificate_2:"Certificate in Advance Programming",
        certificate_3:"Certificate in Machine Learning"
    }

};
teacher4.qualification="M.E"
console.log(teacher4);


console.warn("....................................................................................................................");

//q6
console.log(`Q.6 modity any existing property`);
let teacher5={
    teacherName:"Aradhya Aldar",
    collegeName:"ACPCE Mumbai",
    experiance: "5 years",
    post:"Asst. Prof",
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        Master_in:"EXTC"    
    },
    certificate:{
        certificate_1:"Hacker Rank Participation",
        certificate_2:"Certificate in Advance Programming",
        certificate_3:"Certificate in Machine Learning"
    }

};
teacher5.teacherName="Aradhya Yuvraj Aldar"
console.log(teacher5);
console.log(teacher5.certificate);
console.warn("....................................................................................................................");


//q7
console.log(`Q.7 Delete any one certificate from nested object`);
let teacher6={
    teacherName:"Aradhya Aldar",
    collegeName:"ACPCE Mumbai",
    experiance: "5 years",
    post:"Asst. Prof",
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        Master_in:"EXTC"    
    },
    certificate:{
        certificate_1:"Hacker Rank Participation",
        certificate_2:"Certificate in Advance Programming",
        certificate_3:"Certificate in Machine Learning"
    }

};
delete teacher6.certificate.certificate_2
console.log(teacher6);
console.log(teacher6.certificate);

console.warn("....................................................................................................................");

//q8
console.log(`Q.8 add new certificate in nested object "certificate"`);
let teacher7={
    teacherName:"Aradhya Aldar",
    collegeName:"ACPCE Mumbai",
    experiance: "5 years",
    post:"Asst. Prof",
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        Master_in:"EXTC"    
    },
    certificate:{
        certificate_1:"Hacker Rank Participation",
        certificate_2:"Certificate in Advance Programming",
        certificate_3:"Certificate in Machine Learning"
    }

};
teacher7.certificate.certificate_4="IEEE papers"
//console.log(teacher7);
console.log(teacher7.certificate);