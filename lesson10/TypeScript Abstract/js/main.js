import Customer from "./Customer.js";
import Employee from "./Employee.js";
let myCustomer;
myCustomer = new Customer("Moshe", "Cohen", "12345");
myCustomer.display();
myCustomer.greet();
let myEmployee = new Employee("Roy", "Dadon", 15000);
myEmployee.display();
myEmployee.greet();
// we actually want person to be abstract, so this will not compile
// let myPerson:Person=new Person("Koby","Peled");
