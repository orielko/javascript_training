import AttendentEmployee from "./AttendantEmployee.js";
export class FlightAttendant extends AttendentEmployee {
    constructor(firstName, lastName, seniority, originCountry, department) {
        super(firstName, lastName, seniority, originCountry);
        this.department = department;
    }
    display() {
        return super.getAttendentEmployeeDisplay() + ` , 
        Department: ${this.department}
        `;
    }
    getDepartment() {
        return this.department;
    }
}
export var Departments;
(function (Departments) {
    Departments["FirstClass"] = "First class";
    Departments["Business"] = "Business Class";
    Departments["Economy"] = "Economy class";
})(Departments || (Departments = {}));
