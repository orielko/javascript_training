import Person from "./Person.js";
class Employee extends Person {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    greet() {
        console.log("Hello sir");
    }
    display() {
        super.display();
        console.log("salary: ", this.salary);
    }
}
export default Employee;
