import Employee from "./Employee.js";

abstract class AttendentEmployee extends Employee{

    originCountry:string;

    constructor(firstName:string,lastName:string,seniority:number,originCountry:string){
        super(firstName,lastName,seniority);
        this.originCountry=originCountry;
    }

    public getAttendentEmployeeDisplay(): string {
        return super.getEmployeeDisplay()+` , 
        Origin Country: ${this.originCountry} 
        `;
    }

    public getCountryOrigin():string{
        return this.originCountry;
    }

}

export default AttendentEmployee;