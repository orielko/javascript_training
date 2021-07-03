export abstract class Person{
    protected firstName:string;
    protected lastName:string;

    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    public abstract display():string;

    protected getPersonDisplay():string{
        return `First Name: ${this.firstName} , 
        Last Name: ${this.lastName}`;
    }

}

export enum Persons{
    Pilot,
    FlightAttendant,
    LandSteward,
    Passenger
}

