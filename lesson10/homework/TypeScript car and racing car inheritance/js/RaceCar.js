import Car from "./Car.js";
class RaceCar extends Car {
    constructor(manifacturer, model, color, engineVolume, maxSpeed, racesNumber) {
        super(manifacturer, model, color, engineVolume);
        if (maxSpeed >= 200 && maxSpeed <= 500) {
            this.maxSpeed = maxSpeed;
        }
        else {
            throw new Error("Invalid max speed value- must be between 200 to 500");
        }
        if (racesNumber >= 0 && racesNumber <= 100) {
            this.racesNumber = racesNumber;
        }
        else {
            throw new Error("Invalid races number value- must be between 0 to 100");
        }
    }
    getMaxSpeed() {
        return this.maxSpeed;
    }
    getRacesNumber() {
        return this.racesNumber;
    }
    setMaxSpeed(maxSpeed) {
        if (maxSpeed >= 200 && maxSpeed <= 500) {
            this.maxSpeed = maxSpeed;
        }
        else {
            throw new Error("Invalid max speed value- must be between 200 to 500");
        }
    }
    setRacesNumber(racesNumber) {
        if (racesNumber >= 0 && racesNumber <= 100) {
            this.racesNumber = racesNumber;
        }
        else {
            throw new Error("Invalid races number value- must be between 0 to 100");
        }
    }
}
export default RaceCar;
