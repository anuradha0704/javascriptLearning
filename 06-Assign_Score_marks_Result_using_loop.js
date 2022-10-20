console.warn("Q.Grade System=====================================================");

function gradeSystem(score) {
    var type= typeof(score)
    //console.log(type);
   
    if (score>=0 && score<35 && score!="" && score!=null ) {
        console.log(`For input value ${score} :- "Your are Failed"`);
    
    }
    else if (score>=35 && score<60) {
       console.log(`Your score is ${score} :- Your are Passed and Grade is 'C'`);
    } 

    else if (score>=60 && score<75) {
        console.log(`Your score is ${score} :- Your are Passed and Grade is 'B'`);
    }
    else if (score>=75 && score<=90) {
        console.log(`Your score is ${score} :- Your are Passed and Grade is 'A'`);
    }
    else if (score>90 && score<=100) {
        console.log(`Your score is ${score} :- Your are Passed and Grade is 'A+'`);
    }
    else if (score>90 && score<=100) {
        console.log(`Your score is ${score} :- Your are Passed and Grade is 'A+'`);
    }
    else if (score<0 || score>100 || typeof(score)=='object' || typeof(score)=='undefined'
    ||typeof(score)=='string') 
    {
        console.log(`Given Input value ${score}:- invalid Input`);
    }

}
gradeSystem(66);
console.log("========================================================================================");
gradeSystem(13);
console.log("========================================================================================");

gradeSystem(98);
console.log("========================================================================================");
gradeSystem(35);
console.log("========================================================================================");
gradeSystem(70);
console.log("========================================================================================");
gradeSystem(-20);
console.log("========================================================================================");
gradeSystem(55);
console.log("========================================================================================");
gradeSystem(82);
console.log("========================================================================================");
gradeSystem("");
console.log("========================================================================================");
gradeSystem("fifty five");
console.log("========================================================================================");
gradeSystem(null);
console.log("========================================================================================");
gradeSystem(undefined);
console.log("========================================================================================");







