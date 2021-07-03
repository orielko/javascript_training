export class Perfume{
    name:string;
    company:string;
    amount:number;
    gender:Gender;
    price:number;

    constructor(name:string,company:string,gender:Gender,amount:number,price:number){
        this.name=name;
        this.company=company;
        this.gender=gender;
        this.amount=amount;
        this.price=price;
    }

    public displayDetails(displayElement:HTMLElement):void{
        displayElement.innerHTML=
        `Name: ${this.name},
        Company:${this.company},
        Suitable for:${this.gender},
        Amount:${this.amount},
        Price:${this.price}`
    }

    public getTaxPrice():number{
        return this.price*0.17;
    }
}

export enum Gender{
    Male="male",
    Female="female"
}

