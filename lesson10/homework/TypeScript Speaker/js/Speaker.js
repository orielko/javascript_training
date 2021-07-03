export class Speaker {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    displayDetails(displayElement) {
        displayElement.innerHTML =
            `Color: ${this.color},
        Volume:${this.volume}`;
    }
    on() {
        return "Tturned on";
    }
    off() {
        return "Turned off";
    }
    sound() {
        return "lalala lalala";
    }
}
