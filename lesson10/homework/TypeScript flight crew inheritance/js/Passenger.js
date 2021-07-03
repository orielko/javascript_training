import { Person } from "./Person.js";
class Passenger extends Person {
    constructor(firstName, lastName, passport) {
        super(firstName, lastName);
        this.passport = passport;
    }
    display() {
        return super.getPersonDisplay() + ` ,
        Passport Number: ${this.passport} 
        `;
    }
    getPassport() {
        return this.passport + '';
    }
}
export default Passenger;
