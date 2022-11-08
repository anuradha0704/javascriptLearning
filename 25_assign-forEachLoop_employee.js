//console.warn("===========================Assignment Employee========================================");

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

console.warn("Q.1 Find all employee working in TCS===========================================================");
console.log("Name of Employee Working in TCS:-");
console.log("");
array_employess.forEach((Employee) => {
    if (Employee.emp_company=="TCS") {
        console.log(`Employee Name:- ${Employee.emp_name}          Company Name:- ${Employee.emp_company}`);
        
    }
})

console.warn("Q.2 Find the Employee salary greater than or equal 50000 ===================================");
console.log("Employee Names Whoes Salary is greater than or equal to 50000:-");
//console.log("");
array_employess.forEach((Employee) => 
 {
    
    if (Employee.emp_salary>=50000 ) {
        console.log(`Name:-${Employee.emp_name}      ID:-${Employee.emp_id}       Dept:-${Employee.emp_dept}       Salary:-${ Employee.emp_salary}      Company Name:-${Employee.emp_company}`);
        
    }   
})

console.warn("Q.3 Find the Sum of all Employee salary ===================================================");
let sum =0;
array_employess.forEach((Employee) => 
 {
    //console.log(Employee.emp_salary);
    sum=sum+Employee.emp_salary 
             
})
console.log(`Sum of All Employee Salary is:- ${sum}`);


console.warn("Q.4 Find the average salary =================================================================");

array_employess.forEach((Employee) => 
 {
    
    averageSalary=sum/array_employess.length
             
})
console.log(`Average Salary of all Employee is:- ${averageSalary}`);
  
console.warn("Q.5  Find IT and HR dept.  Employees whose salary is  greater than or equal to 75000===================================");
console.log("Employee Names Whoes Salary is greater than or equal to :-75000");
//console.log("");
array_employess.forEach((Employee) => 
 {
    
    if (Employee.emp_salary>=75000 && (Employee.emp_dept=="IT" || Employee.emp_dept=="HR") ) {
        console.log(`Name:-${Employee.emp_name}      ID:-${Employee.emp_id}       Dept:-${Employee.emp_dept}       Salary:-${ Employee.emp_salary}      Company Name:-${Employee.emp_company}`);
        
    }   
})

