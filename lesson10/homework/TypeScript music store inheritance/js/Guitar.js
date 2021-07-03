import { Instrument } from "./Instrument.js";
class Guitar extends Instrument {
    constructor(model, manufacturer, color, strings) {
        super(model, manufacturer, color);
        this.strings = strings;
    }
    display() {
        return super.getInstreumentDisplay() + ` , 
        Number of strings: ${this.strings} 
        `;
    }
}
export default Guitar;
