class Person{
    // fullName
    // city
    // age
    // gender
    constructor(fullName,city,age,gender){
        this.fullName=fullName,
        this.city=city,
        this.age=age,
        this.gender=gender

    }
    details(){
        console.log(`person detail:-${this.fullName} ${this.city} ${this.age} ${this.gender}  `);
    }
}
let sachin = new Person("sachin Tendulkar","pune",45,"Male");
console.log(sachin);

let rohit = new Person("Rohit Sharma","Mumbai",30,"Male");
console.log(rohit);
 
sachin.details();