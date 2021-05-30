"use strict";
let number1=+prompt("Please enter the first number:");
let number2=+prompt("Please enter the second number:");
//Interesting fact:
//  typeof NaN is number!!
//  if a variable has NaN value and we check for variable!==NaN it will always return true, need to check with isNaN(variable) function
if((typeof number1 === 'number') && (typeof number2 === 'number') && !isNaN(number1) && !isNaN(number2)){
    alert(`Sum is:${number1+number2}`);
    alert(`Average is:${(number1+number2)/2}`);
}else{
    alert("Input had non numbers values")
}
