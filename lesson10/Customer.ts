import Person from "./Person.js";

class Customer extends Person { // Person = Base Class or Super Class
    
    public creditCard: string;

    public constructor(firstName: string, lastName: string, creditCard: string) {
        super(firstName, lastName); // Call Person's constructor
        this.creditCard = creditCard;
    }

    // Function Override:
    public display(): void {
        super.display(); // Call Person's display
        console.log("Credit Card: ", this.creditCard);
    }

}

export default Customer;
