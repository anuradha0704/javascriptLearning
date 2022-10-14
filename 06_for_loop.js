
console.log("nubers are:-");
for (var index = 0; index <=10; index++) {
    console.log(index);;
    
}

console.log("even nuber upto 10:-");
for (var index = 0; index <=10; index=index+2) {
    console.log(index);;
    
}

console.log("5 table:-");
for (var index = 5; index <=50; index=index+5) {
    console.log(index);;
    
}

console.log("50 to 40:-");
for (var index = 50; index >=40; index--) {
    console.log(index);;
    
}
console.log("first 15 odd numbers:-");
for (var index = 1; index <=30; index=index+2) {
    console.log(index);
    
}


for (let index = 1; index < 30; index++) {
    if(index%2!=0){
        console.log(index);
    }
    
}

console.log("even no");
var countEven=0
for (let index = 0; index < 1000; index++) {
    if (index%2==0) {
        console.log(index);
        countEven=countEven+1;
        if(countEven==43) {
            break;
        }
    }
    
}

console.log("odd no");
var countEven=0
for (let index = 1; index < 1000; index++) {
    if (index%2!=0) {
        console.log(index);
        countEven=countEven+1;
        if(countEven==10) {
            break;
        }
    }
    
}