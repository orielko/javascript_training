export class Cat{
    public name:string;
    protected color:string;
    private age:number;

    public constructor(name:string,color:string,age:number){
        this.name=name;
        this.color=color;
        this.age=age;
    }

    public display():void{
        console.log("name",this.name);
        console.log("color",this.color);
        console.log("age",this.age);
    }
}

