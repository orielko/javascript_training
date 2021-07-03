import Employee from "./Employee.js";

class Pilot extends Employee{

    flightLicenseNumber:string;

    constructor(firstName:string,lastName:string,seniority:number,flightLicenseNumber:string){
        super(firstName,lastName,seniority);
        this.flightLicenseNumber=flightLicenseNumber;
    }
    public display(): string {
        return super.getEmployeeDisplay()+` ,
        Flight License Number: ${this.flightLicenseNumber} 
        `;
    }

}

export default Pilot;