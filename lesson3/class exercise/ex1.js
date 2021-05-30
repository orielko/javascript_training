"use strict";
function saveData(){
    let name=fullNameBox.value;
    alert(name);
    localStorage.setItem('fullName',name);
}

if(localStorage.getItem('fullName')!==null){
    console.log('loading the full name');
    fullNameBox.value=localStorage.getItem('fullName');
}

function initUI(){
    console.log('will happen after the body will be loaded');
    //we could put the save lines 8-11 in here
    // if(localStorage.getItem('fullName')!==null){
    //     console.log('loading the full name');
    //     fullNameBox.value=localStorage.getItem('fullName');
    // }
    
}