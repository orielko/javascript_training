import {Speaker} from "./Speaker.js";

let redSpeaker:Speaker=new Speaker("Red",8);
let blueSpeaker:Speaker=new Speaker("Blue",5);

redSpeaker.displayDetails(document.getElementById("speaker1"));
blueSpeaker.displayDetails(document.getElementById("speaker2"));

function doAction(actionDivOutput:HTMLElement, actionResult:string,time:number){
    setTimeout(()=>{actionDivOutput.innerHTML+=actionResult+' ; ';},time);
    
}

const redSpeakerActionDiv:HTMLElement=document.getElementById("speaker1actions")
const blueSpeakerActionDiv:HTMLElement=document.getElementById("speaker2actions")

doAction(redSpeakerActionDiv,redSpeaker.on(),1000);
doAction(redSpeakerActionDiv,redSpeaker.off(),2000);
doAction(redSpeakerActionDiv,redSpeaker.on(),3000);
doAction(redSpeakerActionDiv,redSpeaker.sound(),4000);
doAction(blueSpeakerActionDiv,blueSpeaker.on(),2000);
doAction(blueSpeakerActionDiv,blueSpeaker.off(),4000);
doAction(blueSpeakerActionDiv,blueSpeaker.on(),6000);
doAction(blueSpeakerActionDiv,blueSpeaker.sound(),8000);
doAction(blueSpeakerActionDiv,blueSpeaker.sound(),10000);