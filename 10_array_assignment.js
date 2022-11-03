console.warn("===================Assignment on Array===================================================");
arrayOfNames=["kamat", "Memon", "Nashpati", "Taimur", "Menon", "kamat","Andy","Taimur" ]
console.log(arrayOfNames);

console.warn("===================Delete Duplicate names=====================================================");
let revomeDuplicateNames= new Set(arrayOfNames);
console.log(revomeDuplicateNames);

console.warn("===================Count of How many duplicate elements removes==============================");
let lengthOfArrayOfNames= arrayOfNames.length;
console.log("Count Of Unique Element:-",lengthOfArrayOfNames);

console.log("");
let lengthOfDuplicateNames= revomeDuplicateNames.size
console.log("Length of After removing Duplicate names:-",lengthOfDuplicateNames);

console.log("");
let totalCountOfDuplicateElement= lengthOfArrayOfNames-lengthOfDuplicateNames;
console.log("Total Count Of Duplicate Element:-",totalCountOfDuplicateElement);