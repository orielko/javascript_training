import {Instrument} from "./Instrument.js";

class Guitar extends Instrument{
    strings:number;
    constructor(model:string,manufacturer:string,color:string,strings:number){
        super(model,manufacturer,color);
        this.strings=strings;
    }
    public display(): string {
        return super.getInstreumentDisplay()+` , 
        Number of strings: ${this.strings} 
        `;
    }

}
export default Guitar;