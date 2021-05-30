"use strict";
//we can't use conversion of + on this excersise because it converts null input to 0
let number=prompt("Please enter a number");
//Can use isFinite() function which is the opposite of isNaN()
if(isNaN(number)){ 
    alert("You must enter a numeric value");
}else if(number===''|| number===null){
    alert("You didn't enter any value");
    // gives null for 'cancel' and empty string for empty input
    // console.log(number);
}else{
    alert(Math.pow(number,2));
}
