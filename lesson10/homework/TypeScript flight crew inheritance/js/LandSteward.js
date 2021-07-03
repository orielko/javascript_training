import AttendentEmployee from "./AttendantEmployee.js";
class LandSteward extends AttendentEmployee {
    constructor(firstName, lastName, seniority, originCountry, position) {
        super(firstName, lastName, seniority, originCountry);
        this.position = position;
    }
    display() {
        return super.getAttendentEmployeeDisplay() + ` , 
        position: ${this.position} 
        `;
    }
    getPosition() {
        return this.position;
    }
}
export default LandSteward;
