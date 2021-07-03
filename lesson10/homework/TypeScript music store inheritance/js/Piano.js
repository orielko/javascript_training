import { Instrument } from "./Instrument.js";
class Piano extends Instrument {
    constructor(model, manufacturer, color, keyboardNumber) {
        super(model, manufacturer, color);
        this.keyboardNumber = keyboardNumber;
    }
    display() {
        return super.getInstreumentDisplay() + ` ,
        Keys number: ${this.keyboardNumber} 
        `;
    }
}
export default Piano;
