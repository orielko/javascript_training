abstract class Person{
    private firstName:string;
    private lastName:string;

    public constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    public display():void{
        console.log("first name: ",this.firstName);
        console.log("last name: ",this.lastName);
    }

    public abstract greet():void;
}

export default Person;