import { Person } from "./Person.js";
class Employee extends Person {
    constructor(firstName, lastName, seniority) {
        super(firstName, lastName);
        this.seniority = seniority;
    }
    getEmployeeDisplay() {
        return super.getPersonDisplay() + ` , 
        seniority: ${this.seniority} , 
        `;
    }
    getSeniority() {
        return this.seniority + '';
    }
}
export default Employee;
