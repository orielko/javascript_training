import Guitar from "./Guitar.js";
import Drum from "./Drum.js";
import Piano from "./Piano.js";
import GrandPiano from "./GrandPiano.js";
import { Instrument, Instruments } from "./Instrument.js";

let guitar:Guitar=new Guitar("Storia","Yamaha","Walnut",5);
let drum:Drum=new Drum("DTX402","Yamaha","Black",269);
let piano:Piano=new Piano("K-500","Kawai","Brown",88);
let grandPiano:GrandPiano=new GrandPiano("Model D","Steinway","White",88,274);

document.getElementById("guitarDetails").innerHTML=guitar.display();
document.getElementById("drumDetails").innerHTML=drum.display();
document.getElementById("pianoDetails").innerHTML=piano.display();
document.getElementById("grandPianoDetails").innerHTML=grandPiano.display();
const randomInstrument:number=Math.floor(Math.random()*4);
let instrument:Instrument;
switch(randomInstrument){
    case Instruments.Guitar:
        instrument=guitar;
        break; 
    case Instruments.Drums:
        instrument=drum;
        break; 
    case Instruments.Piano:
        instrument=piano;
        break; 
    case Instruments.GrandPiano:
        instrument=grandPiano;
        break; 
}
document.getElementById("randomInstrumentDetails").innerHTML=instrument.display();


