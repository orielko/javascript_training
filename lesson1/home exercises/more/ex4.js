"use strict";
//My guess that it will convert the variables to numbers- maybe use the memory place or the hex values
let num1='Hello',num2='Bye';
let mul=num1*num2;
alert(`Result for multiplying strings is: ${mul}`);
console.log(mul);
//My guess was wrong, when it tries to convert the string variable the result for this conversion is NaN, therfore the result for multiply NaN's is NaN
//Checking my assumptions:
console.log(num1,parseInt(num1),parseInt(num1)*parseInt(num1),NaN*NaN);