"use strict";
//we can't use conversion of + on this excersise because it converts null input to 0
let number=prompt("Please enter a number");
//TODO: is it enough to check if it's a number only this way?
if(isNaN(number)){
    alert("You must enter a numeric value");
}else if(number===''|| number===null){
    alert("You didn't enter any value");
    // gives null for 'cancel' and empty string for empty input
    // console.log(number);
}else{
    alert(Math.pow(number,2));
}
