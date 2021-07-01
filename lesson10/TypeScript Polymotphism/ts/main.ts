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

let p1:Person=new Employee("kipi","Ben Kipod",300);
p1.display();
const choice=prompt("enter 1 for employee, 2 for customer:");
let chosenPerson:Person;
if(choice==="1"){
    chosenPerson=new Customer("You","you","5421");
}else{
    chosenPerson=new Employee("You","you",111);
}
chosenPerson.display();

// polymorphism function
function report(aPerson:Person){
    console.log("Report: ");
    aPerson.display();
    console.log("------end report------");
}

report(chosenPerson);

//polymorphism array
const people:Person[]=[];
people.push(chosenPerson);
people.push(myCustomer);
people.push(myEmployee);

for(const p of people){
    report(p);
}

// down cast
console.log((p1 as Employee).salary);
//if we are doing instanceof, TS automatically knows the type
if(chosenPerson instanceof Employee ){
    console.log(chosenPerson.salary);
}
