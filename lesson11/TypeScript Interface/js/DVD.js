import Device from "./Device.js";
class DVD extends Device {
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
