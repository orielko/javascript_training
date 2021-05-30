"use strict";
function createCar(model,year,color){
    return {model,year,color};
}
let peugeotCar=createCar("peugeot 208",2020,"blue");
let toyotaYarisCar=createCar("Toyota Yaris",2018,"white");
let mitsubishiCar=createCar("Mitsubishi Space Star",2019,"gray");
console.log(peugeotCar,toyotaYarisCar,mitsubishiCar);
let cars=[peugeotCar,toyotaYarisCar,mitsubishiCar];
for(const car of cars){
    alert(`model: ${car.model}, year: ${car.year}, color: ${car.color}`);
}
for(const car of cars){
    for(const prop in car){
        alert(`${prop}: ${car[prop]}`);
    }
}

