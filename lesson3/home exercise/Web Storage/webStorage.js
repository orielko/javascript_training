"use strict";
function onPageLoad(){
    let bgcolor=localStorage.getItem('bgcolor');
    console.log("loading bgcolor: ",bgcolor);
    if(bgcolor!==null){
        console.log("painting  ");
        document.body.style.backgroundColor=bgcolor;
        pickColorInput.value=bgcolor;
    }
}
onPageLoad();
function paintThePage(){
    let chosenColor=pickColorInput.value;
    console.log(chosenColor);
    localStorage.setItem('bgcolor',chosenColor);
    document.body.style.backgroundColor=chosenColor;

}