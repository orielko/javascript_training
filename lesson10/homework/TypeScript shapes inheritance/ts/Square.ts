import { Shape } from "./Shape.js";

//although square is a private case of Rectangle which all the sides are equals , I still choose to implements it in a different object
class Square extends Shape{
    side:number;
    public getArea(): number {
        return this.side*this.side;
    }
    public getPerimeter(): number {
        return this.side*4;
    }
    constructor(color:string,side:number){
        super(color);
        this.side=side;
    }
    public display(): string {
        return super.getShapreDisplay()+
        ` , 
            Side: ${this.side}
        `;
    }
}
export default Square;
