import Person from "./Person.js";
class Customer extends Person {
    constructor(firstName, lastName, creditCard) {
        super(firstName, lastName);
        this.creditCard = creditCard;
    }
    //function override:
    display() {
        super.display();
        console.log("credit card", this.creditCard);
    }
}
export default Customer;
