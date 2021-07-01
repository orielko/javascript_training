import Person from "./Person.js";

class Customer extends Person{
    public greet(): void {
        console.log("Hello dude");
    }
    private creditCard:string;

    constructor(firstName:string,lastName:string,creditCard:string){
        super(firstName,lastName);
        this.creditCard=creditCard;
    }

    //function override:
    public display():void{
        super.display();
        console.log("credit card",this.creditCard);
    }
}
export default Customer;