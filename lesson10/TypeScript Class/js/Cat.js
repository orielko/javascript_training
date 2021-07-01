export class Cat {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    display() {
        console.log("name", this.name);
        console.log("color", this.color);
        console.log("age", this.age);
    }
}
