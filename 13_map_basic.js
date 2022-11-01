let map= new Map();
map.set(22,"sachin");
map.set(11,"Dravid");
map.set(33,"Gaungully");
map.set(77,"sachin");
console.log(map);

console.log("Adding duplicate Key===========================================================");
map.set(11,"Gautam");//11 key value is updadeted with old value i.e dravid instead of gautam
console.log(map);

console.log("Retrieving values or getting perticular value===========================================================");
let value=map.get(33)
console.log(value);
console.log(map.get());// we get ans as undefined bcoz value 99 is not present in map

console.log("deleting record===========================================================");
map.delete(11)
console.log(map);

console.log("Is key Available===========================================================");
let isAvailableKey=map.has(77);
console.log(isAvailableKey);

console.log("------ Traversing over map collection --------");
let setOfKeys = map.keys();
console.log(setOfKeys);
for (const key of setOfKeys) {
    console.log(map.get(key));
}





