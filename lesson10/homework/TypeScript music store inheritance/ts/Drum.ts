import {Instrument} from "./Instrument.js";

class Drum extends Instrument{
    diameter:number;
    constructor(model:string,manufacturer:string,color:string,diameter:number){
        super(model,manufacturer,color);
        this.diameter=diameter;
    }
    public display(): string {
        return super.getInstreumentDisplay()+` , 
        Diameter length: ${this.diameter} 
        `;
    }

}
export default Drum;