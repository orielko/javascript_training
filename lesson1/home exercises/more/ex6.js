"use strict";
//My guess: because 'undefined' and 'null' are both 'falsy' for '==' comparison it will return "Equal" because it does 'false==false'
// if it was '===' comparison it will also check the type and then it would return "Not equal"
var a;
var b=null;
if(a===b){
    alert("=== comparison: Equal");
}else{
    alert("=== comparison: Not Equal");
}