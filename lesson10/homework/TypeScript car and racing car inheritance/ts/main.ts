import Car from "./Car.js";
import RaceCar from "./RaceCar.js";

let jaguarCar:Car=new Car("Jaguar","Jaguar F-PACE","Silver",3800);
let peugeotRacingCar:RaceCar=new RaceCar("Peugeot","908 HDi FAP","Blue",4000,498,0);

jaguarCar.displayDetails(document.getElementById("car"));
peugeotRacingCar.displayDetails(document.getElementById("raceCar"));
function verifySetAndGet(divId:string,getResult:string | number,expectedResult:string | number,expectFailure?:boolean):void{
    const equalsResult:boolean=(getResult===expectedResult);
     document.getElementById(divId).innerHTML+=`<span style="color:${equalsResult?"green":"red"}">Value: ${getResult} ,expected: ${expectedResult} equals: ${equalsResult} ${expectFailure?" <span style='color:green'> - Expected this failure</span>":""}</span><br> `;

}
verifySetAndGet("carSettersGettersCheck",jaguarCar.getColor(),"Silver");
verifySetAndGet("carSettersGettersCheck",jaguarCar.getModel(),"Jaguar F-PACE");
verifySetAndGet("carSettersGettersCheck",jaguarCar.getManifacturer(),"Jaguar");
verifySetAndGet("carSettersGettersCheck",jaguarCar.getEngineVolume(),3800);
jaguarCar.setColor("Black");
verifySetAndGet("carSettersGettersCheck",jaguarCar.getColor(),"Silver",true);
verifySetAndGet("carSettersGettersCheck",jaguarCar.getColor(),"Black");
try{
    jaguarCar.setEngineVolume(10000);
}catch(e){
    document.getElementById("carSettersGettersCheck").innerHTML+=`<span style="color:orange"}">Catched invalid set: ${e} </span><br> `;

    verifySetAndGet("carSettersGettersCheck",jaguarCar.getEngineVolume(),3800);
}

verifySetAndGet("raceCarSettersGettersCheck",peugeotRacingCar.getColor(),"Blue");
verifySetAndGet("raceCarSettersGettersCheck",peugeotRacingCar.getModel(),"908 HDi FAP");
verifySetAndGet("raceCarSettersGettersCheck",peugeotRacingCar.getManifacturer(),"Peugeot");
verifySetAndGet("raceCarSettersGettersCheck",peugeotRacingCar.getEngineVolume(),4000);
verifySetAndGet("raceCarSettersGettersCheck",peugeotRacingCar.getMaxSpeed(),498);
verifySetAndGet("raceCarSettersGettersCheck",peugeotRacingCar.getRacesNumber(),0);
peugeotRacingCar.setRacesNumber(1);
verifySetAndGet("raceCarSettersGettersCheck",peugeotRacingCar.getRacesNumber(),1);
try{
    peugeotRacingCar.setMaxSpeed(600);
}catch(e){
    document.getElementById("raceCarSettersGettersCheck").innerHTML+=`<span style="color:orange"}">Catched invalid set: ${e} </span><br> `;

    verifySetAndGet("raceCarSettersGettersCheck",peugeotRacingCar.getMaxSpeed(),498);
}

try{
    peugeotRacingCar.setRacesNumber(200);
}catch(e){
    document.getElementById("raceCarSettersGettersCheck").innerHTML+=`<span style="color:orange"}">Catched invalid set: ${e} </span><br> `;
    verifySetAndGet("raceCarSettersGettersCheck",peugeotRacingCar.getRacesNumber(),1);
}

