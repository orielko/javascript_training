import Customer from "./Customer.js";
import Employee from "./Employee.js";

let myCustomer:Customer;
myCustomer=new Customer("Moshe","Cohen","12345");
myCustomer.display();

let myEmployee:Employee=new Employee("Roy","Dadon",15000);
myEmployee.display();