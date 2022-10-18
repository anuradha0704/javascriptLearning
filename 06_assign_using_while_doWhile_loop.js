console.log("==============================Assignment using while loop============================");
console.log("");
console.warn("Q.1 Print numbers from 5 to 15 by incrementing 1");
count=5;
var result = 5;
while (count<15) {
    count++;
    result=result + " " +count   
}
console.log(`Numbers 5 to 15:- ${result}`);
console.log("");

//q.2
console.warn("Q.2 Print numbers from 50 to 40 by decrementing 1");

var result="50";
var count=50;
while (count>40) { // condition
    count--; // update 
    result=result+" " +count
}
console.log(`Numbers 50 to 40:-${result}`);
console.log("");

//q3
console.warn("Q.3 First 15 Odd Numbers");

var result ='1';
var count=1;
    while (count<29) {
        count=count+2;
        result = result+" " + count;  
    }
    
    

console.log(`First 15 odd numbers are:- ${result}`);
console.log("");

//q3
console.warn("Q.4.a First 10 Even Numbers using while loop");

var result =0;
var count=0;
    while (count<18) {
        count=count+2;
        result = result+" " + count;  
    }
    
console.log(`First 10 even numbers are:- ${result}`);
console.log("");

//q3
console.warn("Q.4.b First 10 Even Numbers using while loop with initializing count value");


index=0;
var countEven=0 
result=0;
while (index<1000) 
{
    index++;
    if (index%2==0) 
    {
        //console.log(index);
        countEven=countEven+1;
        if(countEven==10) 
        {
            break;
        }
        result= result+ " " + index;
    } 
   
} 
console.log(`${result}`);
console.log('');
    
//que.5
console.warn("Q.5 Table of 5");

var result =5;
var count=5;
while (count<50)
{
    count= count+5;
    result = result+ " " + count;
    //console.log(count);
}
console.log(`Table Of 5 is:- ${result}`);
console.log("");

//que.6
console.warn("Q.6 Table of 10");

var result =10;
var count=10;
while (count<100)
{
    count= count+10;
    result = result+ " " + count;
    //console.log(count);
}
console.log(`Table Of 10 is:- ${result}`);
console.log("");

//que.6
console.warn("Q.7 Table of 10 in reverse order");

var result =100;
var count=100;
while (count>10)
{
    count= count-10;
    result = result+ " " + count;
    //console.log(count);
}
console.log(`Table Of 10 is in reverse order:- ${result}`);
console.log("");