import AttendentEmployee from "./AttendantEmployee.js";

class LandSteward extends AttendentEmployee{

    position:string;

    constructor(firstName:string,lastName:string,seniority:number,originCountry:string,position:string){
        super(firstName,lastName,seniority,originCountry);
        this.position=position;
    }

    public display(): string {
        return super.getAttendentEmployeeDisplay()+` , 
        position: ${this.position} 
        `;
    }

    public getPosition():string{
        return this.position;
    }

}

export default LandSteward;