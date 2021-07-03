export abstract class Shape{
    protected color:string;

    constructor(color:string){
        this.color=color;
    }

    public abstract display():string;

    public abstract getArea():number;
    public abstract getPerimeter():number;

    protected getShapreDisplay():string{
        return `Color: ${this.color} 
        `;
    }

    public getColor():string{
        return this.color;
    }

}

export enum Shapes{
    Square,
    Rectangle,
    Circle
}

export interface CircularShape{
    getDiameter():number;
}

