class Book{
    name:string;
    author:string;
    publisher:string;
    price:number;

    constructor(name:string,author:string,publisher:string,price:number){
        this.name=name;
        this.author=author;
        this.publisher=publisher;
        this.price=price;
    }

    public displayDetails(displayElement:HTMLElement):void{
        displayElement.innerHTML=
        `Name: ${this.name},
        Authoer:${this.author},
        Publisher:${this.publisher},
        Price:${this.price}`
    }

    public getTaxPrice():number{
        return this.price*0.17;
    }
}

export default Book;