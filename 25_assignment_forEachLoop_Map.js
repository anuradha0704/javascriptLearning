console.warn("=================================Assignment On forEach Loop And Map=========================================");
class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        //this.emp_id=emp_id;
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

const map_employess= new Map()

map_employess.set(22,emp_anil)
map_employess.set(33,emp_radha)
map_employess.set(55,emp_rishi)
map_employess.set(66,emp_sonali)
map_employess.set(77,emp_monika)
map_employess.set(88,emp_vinayak)
map_employess.set(99,emp_mahi)

map_employess.forEach((key, values) => {
    console.log(`Emp_id:${values}===>`,key);
    
});



// map_employess.forEach((key, values) => {
//     console.log(`Emp_id:${emp_anil.emp_id}===> Emp_Name:${(emp_anil.emp_name)} `);
    
// });
