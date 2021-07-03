import Employee from "./Employee.js";
class AttendentEmployee extends Employee {
    constructor(firstName, lastName, seniority, originCountry) {
        super(firstName, lastName, seniority);
        this.originCountry = originCountry;
    }
    getAttendentEmployeeDisplay() {
        return super.getEmployeeDisplay() + ` , 
        Origin Country: ${this.originCountry} 
        `;
    }
    getCountryOrigin() {
        return this.originCountry;
    }
}
export default AttendentEmployee;
