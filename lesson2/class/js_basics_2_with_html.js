let text='Doing something';
function doSomething(){
    console.log("Doing something");
    const pelement=document.getElementById("lala");
    console.log(pelement);
    pelement.innerText="Do somthing";
    pelement.style.backgroundColor="yellow";
    pelement.style.color="red";
    pelement.innerText=new Date().toLocaleTimeString();
    console.log(pelement.innerHTML,pelement.innerHTML.length);
}

//Document Object Model -> DOM , for every html tag, an object is created on memory - a tree of objects,
//we can reach the elements on the DOM from our JS

//excercise:
//when entering with the mouse to button 1 or 2 color it with background green
//when exiting the button area color it with yellow background
function colorButton(element,color){
    element.style.backgroundColor=color;
}

//Event Bubbling - when we bubble event to the element that contain the element above
function paintBubbled(){
    if(window.event.srcElement.nodeName==="BUTTON"){
        window.event.srcElement.style.backgroundColor=window.event.srcElement.style.backgroundColor !=='green'?'green':'yellow';
    }
}

function paintAllPars(){
    const color=document.getElementById("colorPicker");
    const allPars=document.getElementsByTagName("p");
    for (const p of allPars){
        p.style.backgroundColor=color.value;
    }
}