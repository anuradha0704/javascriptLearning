const mohitPerson={
    fullName:"Sachin Tendulkar",
    isMarried:true,
    age:42,
}
for (const key in mohitPerson) {
    if (Object.hasOwnProperty.call(mohitPerson, key)) {
        const element = mohitPerson[key];
        console.log(element);
        
    }
}