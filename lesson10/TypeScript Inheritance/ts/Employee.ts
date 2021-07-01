import Person from "./Person.js";

class Employee extends Person{
    private salary:number;
    constructor(firstName:string,lastName:string,salary:number){
        super(firstName,lastName);
        this.salary=salary;
    }

    public display(){
        super.display();
        console.log("salary: ",this.salary);
    }
}

export default Employee;