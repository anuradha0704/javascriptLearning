

var number = function(dayNumber){
    switch (dayNumber) {
        case 1:
            console.log(`The day for number ${dayNumber} is Monday`);
            break;
        case 2:
            console.log(`The day for number ${dayNumber} is Tuesday`);
            break;
        case 3:
            console.log(`The day for number ${dayNumber} is Wensday`);
            break;
        case 4:
            console.log(`The day for number ${dayNumber} is Thursday`);
            break; 
        case 5:
            console.log(`The day for number ${dayNumber} is friday`);
            break; 
        case 6:
            console.log(`The day for number ${dayNumber} is Saturday`);
            break;  
        case 7:
            console.log("sunday");
            break;           
        default:
            console.log("Invalid input");
            break;
    }
}
number(1);
number(3);
number(5);
number(9);