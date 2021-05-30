"use strict";
function paintPage(callback){
    alert("painting the page");
    callback();// the callback will paint the page in some color
}

function paintBody(){
    paintPage(()=>{document.body.style.backgroundColor=colorPicker.value});
};
