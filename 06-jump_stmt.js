//  var result='';
// for (let index = 0; index < 10; index++) {
//     if (index==5) {
//         result=result+ " " + index
//         break;
//     }
//     console.log(result);
// }

var result = '';
for (let index = 0; index < 10; index++) {
    if(index==5){
        result = result +" " + index;
        break;
    }
}
console.log(result);

for (let index = 0; index < 10; index++) {
    if(index==2){
        continue;
    }
    console.log(index); 
}