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

console.warn("Q.1 find all the employee from Wipro company===============================================");

let wipro= array_employess.filter((Employee) =>{
    if (Employee.emp_company =="Wipro") {
        console.log(`Name:-${Employee.emp_name}      ID:-${Employee.emp_id}       Dept:-${Employee.emp_dept}       Salary:-${ Employee.emp_salary}      Company Name:-${Employee.emp_company}`);
        
    }
    
})
//console.log("");

console.warn("Q.2 find all the employee from IT or Hr Dept=================================================");

let it_Hr= array_employess.filter((Employee) =>{
    if (Employee.emp_dept =="IT" || Employee.emp_dept=="HR") {
        console.log(`Name:-${Employee.emp_name}      ID:-${Employee.emp_id}       Dept:-${Employee.emp_dept}       Salary:-${ Employee.emp_salary}      Company Name:-${Employee.emp_company}`);
        
    }
    
})
//.log("");

console.warn("Q.3 find all the employee whose emp_id are greater than 50=================================================");

let empIdGreater= array_employess.filter((Employee) =>{
    if (Employee.emp_id>50) {
        console.log(`ID:-${Employee.emp_id}      Name:-${Employee.emp_name}        Dept:-${Employee.emp_dept}       Salary:-${ Employee.emp_salary}      Company Name:-${Employee.emp_company}`);

    }
    
})
//console.log("");


console.warn("Q.4 find all the employee names Start With A Or V or M=================================================");

let names= array_employess.filter((Employee) =>{
    if (Employee.emp_name.startsWith("A") || Employee.emp_name.startsWith("V")|| Employee.emp_name.startsWith("M")) {
        console.log(`Name:-${Employee.emp_name}      ID:-${Employee.emp_id}       Dept:-${Employee.emp_dept}       Salary:-${ Employee.emp_salary}      Company Name:-${Employee.emp_company}`);
        
    }
    
})
//console.log("");

console.warn("Q.5 find all the employee names Start With A Or V or M=================================================");

let sum=0;
let averageSalary= array_employess.filter((Employee) =>{
    //let salary= Employee.emp_salary/array_employess.length
    //console.log(`Average Salary of Employee is:- ${salary}`);
    sum=sum+Employee.emp_salary
    
})
let averageSalaryEmployee=sum/array_employess.length
console.log(`Sum of  Employee salary is:- ${sum}`);
console.log(`Average Salary of Employee is:-`,averageSalaryEmployee);

console.warn("Q.6 find average salary of IT dept=================================================");

sum1=0;
let new_array=[];
let averageSalaryIt= array_employess.filter((Employee) =>{
    if (Employee.emp_dept=="IT") {
        new_array.push(Employee.emp_name)
        sum1=sum1+Employee.emp_salary
        console.log(`Name:-${Employee.emp_name}      ID:-${Employee.emp_id}       Dept:-${Employee.emp_dept}       Salary:-${ Employee.emp_salary}      Company Name:-${Employee.emp_company}`);
        

    }
  
})
//console.log(new_array);
console.log(`Sum of IT dept Employee salary is:- ${sum1}`);
console.log(`Average Salary of It Dept is:- ${sum1/new_array.length}`);

//or
console.warn("Q.6 find average salary of IT dept= using reduce and filter method================================================");
let new_array_emps9=[]
array_employess.filter((Employee)=>{
    if(Employee.emp_dept=="IT"){
        new_array_emps9.push(Employee.emp_salary)
    }
});
console.log(new_array_emps9);
let len=new_array_emps9.length;
console.log(len);

let sum3=new_array_emps9.reduce((runningTotal,value,index)=>{
    runningTotal= runningTotal + value;
    
        avg= runningTotal/len
    return runningTotal;
})
console.log(`Average salary of IT department :${avg} `)