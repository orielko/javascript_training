import {Flashlight} from "./Flashlight.js";

let whiteFlashlight:Flashlight=new Flashlight("White",200,300,2);
let yellowFlashlight:Flashlight=new Flashlight("Yellow",300,400,4);

whiteFlashlight.displayDetails(document.getElementById("flashlight1"));
yellowFlashlight.displayDetails(document.getElementById("flashlight2"));

function doAction(actionDivOutput:HTMLElement, actionResult:string,time:number){
    setTimeout(()=>{actionDivOutput.innerHTML+=actionResult+' ; ';},time);
    
}

const yellowFlashlightActionDiv:HTMLElement=document.getElementById("flashlight1actions")
const whiteFlashlightActionDiv:HTMLElement=document.getElementById("flashlight2actions")

doAction(yellowFlashlightActionDiv,yellowFlashlight.on(),1000);
doAction(yellowFlashlightActionDiv,yellowFlashlight.off(),2000);
doAction(yellowFlashlightActionDiv,yellowFlashlight.on(),3000);
doAction(yellowFlashlightActionDiv,yellowFlashlight.switchBatteries(),4000);
doAction(whiteFlashlightActionDiv,whiteFlashlight.on(),2000);
doAction(whiteFlashlightActionDiv,whiteFlashlight.off(),4000);
doAction(whiteFlashlightActionDiv,whiteFlashlight.on(),6000);
doAction(whiteFlashlightActionDiv,whiteFlashlight.switchBatteries(),8000);
doAction(whiteFlashlightActionDiv,whiteFlashlight.off(),10000);