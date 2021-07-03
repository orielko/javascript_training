export class Shape {
    constructor(color) {
        this.color = color;
    }
    getShapreDisplay() {
        return `Color: ${this.color} 
        `;
    }
    getColor() {
        return this.color;
    }
}
export var Shapes;
(function (Shapes) {
    Shapes[Shapes["Square"] = 0] = "Square";
    Shapes[Shapes["Rectangle"] = 1] = "Rectangle";
    Shapes[Shapes["Circle"] = 2] = "Circle";
})(Shapes || (Shapes = {}));
