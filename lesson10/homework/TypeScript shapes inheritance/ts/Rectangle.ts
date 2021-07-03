import { Shape } from "./Shape.js";


class Rectangle extends Shape{
    heightSide:number;
    widthSide:number;

    public getArea(): number {
        return this.heightSide*this.widthSide;
    }
    public getPerimeter(): number {
        return this.heightSide*2+this.widthSide*2;
    }
    constructor(color:string,heightSide:number,widthSide:number){
        super(color);
        this.heightSide=heightSide;
        this.widthSide=widthSide;
    }
    public display(): string {
        return super.getShapreDisplay()+
        ` , 
        Height Side: ${this.heightSide},
        Width Side: ${this.widthSide}
        `;
    }
}
export default Rectangle;
