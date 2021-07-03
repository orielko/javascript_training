export abstract class Instrument{
    protected model:string;
    protected manifacturer:string;
    protected color:string;

    constructor(model:string,manufacturer:string,color:string){
        this.model=model;
        this.manifacturer=manufacturer;
        this.color=color;
    }

    public abstract display():string;

    protected getInstreumentDisplay():string{
        return `Model: ${this.model} , 
        Manfacturer: ${this.manifacturer} , 
        Color: ${this.color}`;
    }

}

export enum Instruments{
    Guitar,
    Drums,
    Piano,
    GrandPiano
}

