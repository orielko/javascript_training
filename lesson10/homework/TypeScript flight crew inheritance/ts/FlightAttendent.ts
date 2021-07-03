import AttendentEmployee from "./AttendantEmployee.js";

export class FlightAttendant extends AttendentEmployee{

    department:Departments;

    constructor(firstName:string,lastName:string,seniority:number,originCountry:string,department:Departments){
        super(firstName,lastName,seniority,originCountry);
        this.department=department;
    }

    public display(): string {
        return super.getAttendentEmployeeDisplay()+` , 
        Department: ${this.department}
        `;
    }

    public getDepartment():string{
        return this.department;
    }

}

export enum Departments{
    FirstClass="First class",
    Business="Business Class",
    Economy="Economy class"
}