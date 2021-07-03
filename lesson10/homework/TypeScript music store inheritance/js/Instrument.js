export class Instrument {
    constructor(model, manufacturer, color) {
        this.model = model;
        this.manifacturer = manufacturer;
        this.color = color;
    }
    getInstreumentDisplay() {
        return `Model: ${this.model} , 
        Manfacturer: ${this.manifacturer} , 
        Color: ${this.color}`;
    }
}
export var Instruments;
(function (Instruments) {
    Instruments[Instruments["Guitar"] = 0] = "Guitar";
    Instruments[Instruments["Drums"] = 1] = "Drums";
    Instruments[Instruments["Piano"] = 2] = "Piano";
    Instruments[Instruments["GrandPiano"] = 3] = "GrandPiano";
})(Instruments || (Instruments = {}));
