import Customer from "./Customer.js";
import Employee from "./Employee.js";
import Person from "./Person.js";

let myCustomer:Customer;
myCustomer=new Customer("Moshe","Cohen","12345");
myCustomer.display();
myCustomer.greet();

let myEmployee:Employee=new Employee("Roy","Dadon",15000);
myEmployee.display();
myEmployee.greet();

// we actually want person to be abstract, so this will not compile
// let myPerson:Person=new Person("Koby","Peled");
