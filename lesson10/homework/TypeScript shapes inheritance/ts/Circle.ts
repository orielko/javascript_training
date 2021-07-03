import { CircularShape, Shape } from "./Shape.js";

class Circle extends Shape implements CircularShape{

    radius:number;

    constructor(color:string,radius:number){
        super(color);
        this.radius=radius;
    }
    getDiameter(): number {
        return this.radius*2;
    }
    public display(): string {
        return super.getShapreDisplay()+
        ` , 
        Radius: ${this.radius}`;
    }
    public getArea(): number {
        return Math.PI*this.radius*this.radius;
    }
    public getPerimeter(): number {
        return 2*Math.PI*this.radius;
    }
}

export default Circle;
