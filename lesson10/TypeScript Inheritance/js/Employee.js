import Person from "./Person.js";
class Employee extends Person {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    display() {
        super.display();
        console.log("salary: ", this.salary);
    }
}
export default Employee;
