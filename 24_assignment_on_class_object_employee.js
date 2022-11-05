console.warn("===========================Assignment Employee========================================");
console.log("Name:-Anuradha Aldar");
console.log("Assignent no-2");

class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company
    }
}
const emp_anil= new Employee(22,"Anil", "IT", 50000, "TCS");
const emp_radha= new Employee(33,"Radha", "HR", 74000, "Wipro");
const emp_rishi= new Employee(55,"Rishi", "Finance", 47000, "TCS");
const emp_sonali= new Employee(66,"Sonali", "Finance", 45000, "Infy");
const emp_monika= new Employee(77,"Monika", "IT", 40000, "Wipro");
const emp_vinayak= new Employee(88,"Vinayak", "IT", 75000, "TCS");
const emp_mahi= new Employee(99,"Mahesh", "HR", 85000, "Infy");

const array_employess = [emp_anil, emp_radha,emp_rishi,emp_sonali, emp_monika,emp_vinayak,emp_mahi]
//console.log(array_employess);

console.warn("Q.1 Find all employee working in TCS===========================================================");
console.log("Name of Employee Working in TCS:-");
console.log("");
for (const Employee of array_employess) {
    
    if (Employee.emp_company=="TCS") {
        console.log(`Employee Name:- ${Employee.emp_name}          Company Name:- ${Employee.emp_company}`);
        
    }
    
}


console.warn("Q.2 Find the Finance departent Employee===========================================================");
console.log("Finance Department Employee Names:-");
console.log("");

for (const Employee of array_employess) {
    
    if (Employee.emp_dept=="Finance") {
        console.log(`Department Name:- ${Employee.emp_dept}          Employee Name:- ${Employee.emp_name}`);
        
    }
    
}

console.warn("Q.3 Find the Employee whose name start with R ===========================================================");
console.log("Employee Names Start with R :-");
//console.log("");
   
for (const Employee of array_employess) {
    
    if (Employee.emp_name.startsWith("R")) {
        console.log(`Name:-${Employee.emp_name}  ID:-${Employee.emp_id}  Dept:-${Employee.emp_dept}  Salary:-${ Employee.emp_salary}  Company:-${Employee.emp_company}`);
        
    }
    
}


console.warn("Q.4 Find the Employee salary greater than 70000===========================================================");
console.log("Employee Names Whoes Salary is greater than 70000 :-");
//console.log("");
   
for (const Employee of array_employess) {
    
    if (Employee.emp_salary>70000) {
        console.log(`Name:-${Employee.emp_name}     Salary:-${ Employee.emp_salary}    Company name:-${Employee.emp_company}`);
        
    }
    
}



console.warn("Q.5 Find the Employee salary greater than or equal 50000 and from IT Deparment====================");
console.log("Employee Names Whoes Salary is greater than or equal to 50000 and also from IT Dept.:-");
//console.log("");
   
for (const Employee of array_employess) {
    
    if (Employee.emp_salary>=50000 && Employee.emp_dept=="IT") {
        console.log(`Name:-${Employee.emp_name}  ID:-${Employee.emp_id}  Dept:-${Employee.emp_dept}  Salary:-${ Employee.emp_salary}  Company Name:-${Employee.emp_company}`);
        
    }
    
}


console.warn("Q.5 Find the Employee from company Infy===================================================");
console.log("Employee Names From Company Name Infy .:-");
//console.log("");
   
for (const Employee of array_employess) {
    
    if (Employee.emp_company=="Infy") {
        console.log(`Name:-${Employee.emp_name}  ID:-${Employee.emp_id}  Dept:-${Employee.emp_dept}  Salary:-${ Employee.emp_salary}  Company Name:-${Employee.emp_company}`);
        
    }
    
}
