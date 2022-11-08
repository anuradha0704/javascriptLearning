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

console.warn("Q.1 Get the List of All Employee Names===========================================================");
//console.log("List  of Employee Names :-");
console.log("");

result="";
array_employess.forEach((Employee) => {
        result=result+"    "+Employee.emp_name
        
})
console.log(`List Of Employee Name:- [${result}]`);

console.warn("Q.2 Get the List of All Dept======================================================================");
//console.log("List  of Employee Names :-");
console.log("");

result="";
array_employess.forEach((Employee) => {
        result=result+"    "+Employee.emp_dept
        
})
console.log(`List Of Department:- [${result}]`);

console.warn("Q.2 Get the List of All Dept with not repeating values======================================================================");
//console.log("List  of Employee Names :-");
console.log("");

const arraynew1=new Array(Employee.emp_dept)
console.log(arraynew1);
 const arrayNew= array_employess.map((Employee) => {
        return Employee.emp_dept
        
})
console.log(`List Of Department:- [${arrayNew}]`);

console.warn("Q.3 Get the List of Employee ID===========================================================");
//console.log("List  of Employee Names :-");
console.log("");

result="";
array_employess.forEach((Employee) => {
        result=result+"    "+Employee.emp_id
        
})
console.log(`List Of Employee Id:- [${result}]`);