class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    display() {
        console.log("first name: ", this.firstName);
        console.log("last name: ", this.lastName);
    }
}
export default Person;
