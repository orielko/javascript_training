import { Person } from "./Person.js";

abstract class Employee extends Person{
    seniority:number;

    constructor(firstName:string,lastName:string,seniority:number){
        super(firstName,lastName);
        this.seniority=seniority;
    }
    protected getEmployeeDisplay():string{
        return super.getPersonDisplay()+` , 
        seniority: ${this.seniority} , 
        `;
    }

    public getSeniority():string{
        return this.seniority +'';
    }
}

export default Employee;