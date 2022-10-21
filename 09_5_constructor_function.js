function Person(fullName, city, age, gender) {
    this.fullName = fullName;
    this.city = city;
    this.age = age;
    this.gender = gender;
}
let tend = new Person("Sachin Tendulkar", "Pune", 45, "Male");
console.log(tend);

let sharma = new Person("Rohit Sharma", "Pune", 32, "Male");
console.log(sharma);


console.warn("==============prototype property=====================");
function Person1(fullName, city, age, gender) {
    this.fullName = fullName;
    this.city = city;
    this.age = age;
    this.gender = gender;
}
Person1.prototype.country = "India";
let sachin1 = new Person1("Sachin Tendulkar", "Surat", 45, "Male");
let sharma1 = new Person1("Rohit Sharma", "Pune", 32, "Male");
let riya = new Person1("Riya", "Kolhapur", 22, "Female");
let sona = new Person1("Sona", "Mumbai", 19, "Female");

console.log(sachin1.country);
console.log(riya.country);