class Car {
    constructor(manifacturer, model, color, engineVolume) {
        this.manifacturer = manifacturer;
        this.model = model;
        this.color = color;
        if (engineVolume > 0 && engineVolume <= 4000) {
            this.engineVolume = engineVolume;
        }
        else {
            throw new Error("Invalid engine volume value- must be between 0 to 4000");
        }
    }
    displayDetails(displayElement) {
        displayElement.innerHTML =
            `Manifacturer: ${this.manifacturer},
        Model:${this.model},
        Color:${this.color},
        Engine Volume:${this.engineVolume}`;
    }
    getManifacturer() {
        return this.manifacturer;
    }
    getColor() {
        return this.color;
    }
    getModel() {
        return this.model;
    }
    getEngineVolume() {
        return this.engineVolume;
    }
    setManifacturer(manifacturer) {
        this.manifacturer = manifacturer;
    }
    setColor(color) {
        this.color = color;
    }
    setModel(model) {
        this.model = model;
    }
    setEngineVolume(engineVolume) {
        if (engineVolume > 0 && engineVolume <= 4000) {
            this.engineVolume = engineVolume;
        }
        else {
            throw new Error("Invalid engine volume value- must be between 0 to 4000");
        }
    }
}
export default Car;
