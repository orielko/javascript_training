"use strict";
function clearFields(){
    let fields=['firstName','lastName','message'];
    for(const field of fields){
        document.getElementById(field).style="background-color:white;";
    }
}
function validateForm(){
    clearFields();

    if(document.getElementById('firstName').value===''){
        alert("חסר שם פרטי");
        document.getElementById('firstName').style="background-color:pink;";
        return false;
    }
    if(document.getElementById('lastName').value===''){
        document.getElementById('lastName').style="background-color:pink;";

        alert("חסר שם משפחה");
        return false;
    }
    //not required (optional)
    // if(document.getElementById('gender')===null){
    //     alert("missing gender");
    //     return false;
    // }
    if(document.getElementById('message').value===''){
        document.getElementById('message').style="background-color:pink;";
        alert("חסרה הודעה");
        return false;
    }
    
    return true;
}