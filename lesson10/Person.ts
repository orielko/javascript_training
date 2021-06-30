class Person {
    
    public firstName;
    public lastName;

    public constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public display(): void {
        console.log("First name: ", this.firstName);
        console.log("Last name: ", this.lastName);
    }

}
export default Person;