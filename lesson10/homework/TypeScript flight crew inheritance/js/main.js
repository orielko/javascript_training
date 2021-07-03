import Pilot from "./Pilot.js";
import { Departments, FlightAttendant } from "./FlightAttendent.js";
import LandSteward from "./LandSteward.js";
import Passenger from "./Passenger.js";
import { Persons } from "./Person.js";
import AttendentEmployee from "./AttendantEmployee.js";
function report(person) {
    return `
    <br>
    -------------Report---------<br>
    
    Time: ${new Date()}<br>
    ----------------------------<br>
    Details:<br>
    ----------------------------<br>
    ${person.display()}<br>
    ----------------------------<br>
    ------------End-------------<br>
    <br>
    `;
}
let pilot = new Pilot("Harrison", "Ford", 5, "2244223");
let flightAttendent = new FlightAttendant("Carole", "Elizabeth Middleton", 6, "UK", Departments.FirstClass);
let someLandSteward = new LandSteward("Ellen", "Church", 17, "Sweden", "Tickets");
let passenger = new Passenger("Arnold", "Schwarzenegger", 66774466);
document.getElementById("pilotDetails").innerHTML = pilot.display();
document.getElementById("flightAttendentDetails").innerHTML = flightAttendent.display();
document.getElementById("landstewardDetails").innerHTML = someLandSteward.display();
document.getElementById("passengerDetails").innerHTML = passenger.display();
const randomPerson = Math.floor(Math.random() * 4);
let person;
switch (randomPerson) {
    case Persons.Pilot:
        person = pilot;
        break;
    case Persons.FlightAttendant:
        person = flightAttendent;
        break;
    case Persons.LandSteward:
        person = someLandSteward;
        break;
    case Persons.Passenger:
        person = passenger;
        break;
}
document.getElementById("randomPersonDetails").innerHTML += person.display();
if (person instanceof Pilot) {
    document.getElementById("randomPersonDetailsExtra").innerHTML += person.getSeniority();
}
if (person instanceof FlightAttendant) {
    document.getElementById("randomPersonDetailsExtra").innerHTML += person.getDepartment() + ' , ';
}
if (person instanceof LandSteward) {
    document.getElementById("randomPersonDetailsExtra").innerHTML += person.getPosition() + ' , ';
}
if (person instanceof AttendentEmployee) {
    document.getElementById("randomPersonDetailsExtra").innerHTML += person.getCountryOrigin();
}
if (person instanceof Passenger) {
    document.getElementById("randomPersonDetailsExtra").innerHTML += person.getPassport();
}
//Polymorphism part
document.getElementById("reports").innerHTML += report(pilot);
document.getElementById("reports").innerHTML += report(flightAttendent);
document.getElementById("reports").innerHTML += report(someLandSteward);
document.getElementById("reports").innerHTML += report(passenger);
