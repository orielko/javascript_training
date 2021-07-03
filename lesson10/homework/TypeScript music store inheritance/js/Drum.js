import { Instrument } from "./Instrument.js";
class Drum extends Instrument {
    constructor(model, manufacturer, color, diameter) {
        super(model, manufacturer, color);
        this.diameter = diameter;
    }
    display() {
        return super.getInstreumentDisplay() + ` , 
        Diameter length: ${this.diameter} 
        `;
    }
}
export default Drum;
