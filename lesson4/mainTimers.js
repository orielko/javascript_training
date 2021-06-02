"use strict";
let intervalId;
function messageTimer(){
    const message=prompt("Enter your message:");
    const seconds=+prompt("Enter the number of seconds:");
    //wait with timeout
    window.setTimeout(() => {
        alert(message);
    }, seconds*1000);


}
function messageTimerInterval(){
  

    intervalId=window.setInterval(() => {
        const now=new Date();
        timer.innerText=now.toLocaleTimeString();
    }, 1000);
    


}
function stopTimer(){
    window.clearInterval(intervalId);
}