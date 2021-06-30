import Device from "./Device.js";
import Player from "./Player.js";

class DVD extends Device implements Player,Tester{
    volumeLevel2: number; //by default its public
    public maxMinutes:number;
    public volumeLevel:number;
    play() {
        console.log("playing");
    }
    pause() {
        console.log("Pause");
    }
    stop() {
        console.log("Stop");
    }
    test() {
        console.log("Test");
    }
    
}
export default DVD;