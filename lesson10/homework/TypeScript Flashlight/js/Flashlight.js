export class Flashlight {
    constructor(color, length, lumens, batteries) {
        this.color = color;
        this.length = length;
        this.lumens = lumens;
        this.batteries = batteries;
    }
    displayDetails(displayElement) {
        displayElement.innerHTML =
            `Color: ${this.color},
        Lumens: ${this.lumens},
        Batteries: ${this.batteries},
        length:${this.length}`;
    }
    on() {
        return "Tturned on";
    }
    off() {
        return "Turned off";
    }
    switchBatteries() {
        return "Batteries switched";
    }
}
