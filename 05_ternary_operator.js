var num1 = -5;
 var result = num1 > 0 ? "Positive" : "Negative";
 console.log(result);

var number= function(num1){
    
    var modules_number= num1 % 2

    var evn_odd = modules_number=0 ? "Even" : "odd";
    console.log(`is number is even or odd:- ${evn_odd}`);
}
number(6)