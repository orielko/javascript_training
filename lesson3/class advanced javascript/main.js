"use strict";
function doSomething(){
    console.log("function assignment: doing something");
    return 123;
}
//Invoking the function
const result=doSomething();
console.log("function assignment: Result:",result);
//Function is an object, so we can assign it as a variable
const myFunction=doSomething;
console.log("function assignment: Function:",myFunction);

//how to invoke myFunction
console.log("function assignment: Function:",myFunction());