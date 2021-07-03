import { Shape } from "./Shape.js";
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getDiameter() {
        return this.radius * 2;
    }
    display() {
        return super.getShapreDisplay() +
            ` , 
        Radius: ${this.radius}`;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
export default Circle;
