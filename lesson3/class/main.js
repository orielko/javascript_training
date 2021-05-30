"use strict";
//Browser Object Model -> BOM  - the window object and the API it exposes
const youtubeURL="https://www.youtube.com/watch?v=sah4IuCkPmYl";
function testLocation(){
    window.location=youtubeURL;
    //get the QueryString (page arguments)
    const queryString=window.location.search;
    alert(queryString);
}

function testHistory(){
    console.log('History clicked');
   // alert(window.history.length);
    //window.history.back();
    //window.history.forward();
    //go to the URL only if it contained in our history
    //window.history.go("https://www.youtube.com/");
}

function testOpen(){
    window.open("index.html","","width=500, height=500 , top=100, left=100");
}
function testClose(){
    //the close operation is possible only if we opened the window
    window.close();
}

function testPrint(){
    window.print();
}

//cookies automatically are sent to the backend
function saveSessionCookies(){
    //each cookie saving it separatly, so we are saving two cookies
    document.cookie="color=Green";
    document.cookie="font=Ariel";
}

function printCookies(){
    alert(document.cookie);
}

function savePersistentCookies(){
    const experationDate=new Date();
    experationDate.setMonth(experationDate.getMonth()+3);
    document.cookie="username=ori; expires="+experationDate;
}

//session storage is not sent to the server automatically
function saveSessionStorage(){
    sessionStorage.setItem("color","Red");
    sessionStorage.setItem("font","David");
}

function printSessionStorage(){
    alert(sessionStorage.getItem("color")+' '+sessionStorage.getItem("font"));
}
//local storage is not sent to the server automatically, saved on the memory always
function saveSessionLocalStorage(){
    localStorage.setItem("color","Blue");
    localStorage.setItem("font","Amor");
}

function printSessionLocalStorage(){
    alert(localStorage.getItem("color")+' '+localStorage.getItem("font"));
}
function saveCookieFromInput(){
    //'encodeURIComponent' function has 11 more characters to encode than the 'encodeURI' function
    //enter input with ';' to mess it up
    const userName=prompt("Enter username:");
    const userEmail=prompt("Enter email:");
    //so we must encode it before and decode it on the print
    //TODO: check the exact example from the recording and write it on the html page
    document.cookie=`username=${userName}`;
    document.cookie=`email=${userEmail}`;
    // document.cookie=`username=${encodeURIComponent(userName)}`;
    // document.cookie=`email=${encodeURIComponent(userEmail)}`;
}
function loadCookieFromInput(){
    alert(decodeURIComponent(document.cookie));
}

window.navigator.geolocation.getCurrentPosition(position=>console.log(position));
