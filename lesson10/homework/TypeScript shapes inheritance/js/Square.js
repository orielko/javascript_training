import { Shape } from "./Shape.js";
//although square is a private case of Rectangle which all the sides are equals , I still choose to implements it in a different object
class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
    getPerimeter() {
        return this.side * 4;
    }
    display() {
        return super.getShapreDisplay() +
            ` , 
            Side: ${this.side}
        `;
    }
}
export default Square;
