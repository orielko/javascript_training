import Employee from "./Employee.js";
class Pilot extends Employee {
    constructor(firstName, lastName, seniority, flightLicenseNumber) {
        super(firstName, lastName, seniority);
        this.flightLicenseNumber = flightLicenseNumber;
    }
    display() {
        return super.getEmployeeDisplay() + ` ,
        Flight License Number: ${this.flightLicenseNumber} 
        `;
    }
}
export default Pilot;
