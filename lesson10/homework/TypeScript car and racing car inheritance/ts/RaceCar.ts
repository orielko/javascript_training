import Car from "./Car.js";

class RaceCar extends Car{
    maxSpeed:number;
    racesNumber:number;

    constructor(manifacturer:string,model:string,color:string,engineVolume:number,maxSpeed:number,racesNumber:number){
        super(manifacturer,model,color,engineVolume);
        if(maxSpeed>=200 && maxSpeed<=500){
            this.maxSpeed=maxSpeed;
        }else{
            throw new Error("Invalid max speed value- must be between 200 to 500");      
        }
        if(racesNumber>=0 && racesNumber<=100){
            this.racesNumber=racesNumber;
        }else{
            throw new Error("Invalid races number value- must be between 0 to 100");      
        }
    }
    public getMaxSpeed():number{
        return this.maxSpeed;
    }
    public getRacesNumber():number{
        return this.racesNumber;
    }

    public setMaxSpeed(maxSpeed:number):void{
        if(maxSpeed>=200 && maxSpeed<=500){
            this.maxSpeed=maxSpeed;
        }else{
            throw new Error("Invalid max speed value- must be between 200 to 500");      
        }
    }
    public setRacesNumber(racesNumber:number):void{
        if(racesNumber>=0 && racesNumber<=100){
            this.racesNumber=racesNumber;
        }else{
            throw new Error("Invalid races number value- must be between 0 to 100");      
        }
    }
}

export default RaceCar;