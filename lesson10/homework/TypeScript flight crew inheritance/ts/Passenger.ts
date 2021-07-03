import { Person } from "./Person.js";

class Passenger extends Person{

    passport:number;

    constructor(firstName:string,lastName:string,passport:number){
        super(firstName,lastName);
        this.passport=passport;
    }
    public display(): string {
        return super.getPersonDisplay()+` ,
        Passport Number: ${this.passport} 
        `;
    }

    public getPassport():string{
        return this.passport+'';
    }

}

export default Passenger;