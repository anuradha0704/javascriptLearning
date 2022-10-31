
function primeNumber(nuberToCheck) {
    for (let index = 2; index < nuberToCheck; index++) {
       if (nuberToCheck%index==0) {
          return console.log("not aprime number");;
       } 
        
    }
    return console.log(`prime number`);;
    
}
console.log(primeNumber(11)); 
console.log(primeNumber(9)); 
console.log(primeNumber(29)); 