console.log("");
console.warn("========Month display using switch case statement===========");
var month = function(dayNumber){
    switch (dayNumber) {
        case 1:
            console.log(`The month ${dayNumber} is January`);
            break;
        case 2:
            console.log(`The month ${dayNumber} is February`);
            break;
        case 3:
            console.log(`The month ${dayNumber} is March`);
            break;
        case 4:
            console.log(`The month ${dayNumber} is April`);
            break; 
        case 5:
            console.log(`The month ${dayNumber} is May`);
            break; 
        case 6:
            console.log(`The month ${dayNumber} is June`);
            break;  
        case 7:
            console.log(`The month ${dayNumber} is July`);
            break;    
        case 8:
            console.log(`The month ${dayNumber} is August`);
            break;   
        case 9:
            console.log(`The month ${dayNumber} is September`);
            break;  
        case 10:
            console.log(`The month ${dayNumber} is Octomber`);
            break;  
        case 11:
            console.log(`The month ${dayNumber} is November`);
            break;  
        case 12:
            console.log(`The month ${dayNumber} is December`);
            break;       
        default:
            console.log(`${dayNumber}:- Entered Number is Invalid Number`);
            break;
    }
}
month(1);
console.log("");
month(5);
console.log("");
month(12);
console.log("");
month(15);
console.log("");
month(7);
console.log("");
month(4);
