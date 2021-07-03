class Employee {
    constructor(firstName, lastName, address, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.salary = salary;
    }
    displayDetails(displayElement) {
        displayElement.innerHTML =
            `First Name: ${this.firstName},
        Last Name:${this.lastName},
        Address:${this.address},
        Salary:${this.salary}`;
    }
    getTaxPrice() {
        return this.salary * 0.1;
    }
}
export default Employee;
