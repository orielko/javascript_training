export class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getPersonDisplay() {
        return `First Name: ${this.firstName} , 
        Last Name: ${this.lastName}`;
    }
}
export var Persons;
(function (Persons) {
    Persons[Persons["Pilot"] = 0] = "Pilot";
    Persons[Persons["FlightAttendant"] = 1] = "FlightAttendant";
    Persons[Persons["LandSteward"] = 2] = "LandSteward";
    Persons[Persons["Passenger"] = 3] = "Passenger";
})(Persons || (Persons = {}));
