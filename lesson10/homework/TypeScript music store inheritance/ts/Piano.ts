import {Instrument} from "./Instrument.js";

class Piano extends Instrument{
    keyboardNumber:number;
    constructor(model:string,manufacturer:string,color:string,keyboardNumber:number){
        super(model,manufacturer,color);
        this.keyboardNumber=keyboardNumber;
    }
    public display(): string {
        return super.getInstreumentDisplay()+` ,
        Keys number: ${this.keyboardNumber} 
        `;
    }

}

export default Piano;