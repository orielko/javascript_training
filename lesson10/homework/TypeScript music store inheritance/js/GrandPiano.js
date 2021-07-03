import Piano from "./Piano.js";
class GrandPiano extends Piano {
    constructor(model, manufacturer, color, keyboardNumber, length) {
        super(model, manufacturer, color, keyboardNumber);
        this.length = length;
    }
    display() {
        return super.display() + ` , 
        Grand Piano length: ${this.length} 
        `;
    }
}
export default GrandPiano;
