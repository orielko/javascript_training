class Employee{
    firstName:string;
    lastName:string;
    address:string;
    salary:number;

    public constructor(firstName:string,lastName:string,address:string,salary:number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.salary=salary;
    }
    public displayDetails(displayElement:HTMLElement):void{
        displayElement.innerHTML=
        `First Name: ${this.firstName},
        Last Name:${this.lastName},
        Address:${this.address},
        Salary:${this.salary}`
    }

    public getTaxPrice():number{
        return this.salary*0.1;
    }
}

export default Employee;