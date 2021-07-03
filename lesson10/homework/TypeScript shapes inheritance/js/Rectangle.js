import { Shape } from "./Shape.js";
class Rectangle extends Shape {
    constructor(color, heightSide, widthSide) {
        super(color);
        this.heightSide = heightSide;
        this.widthSide = widthSide;
    }
    getArea() {
        return this.heightSide * this.widthSide;
    }
    getPerimeter() {
        return this.heightSide * 2 + this.widthSide * 2;
    }
    display() {
        return super.getShapreDisplay() +
            ` , 
        Height Side: ${this.heightSide},
        Width Side: ${this.widthSide}
        `;
    }
}
export default Rectangle;
