"use strict";
//arrow function is anonymous function in a shorter syntax (in c# (=>) /Java (->) ) it called: Lambda Expression)
const arrowFunction=()=>{
    console.log("Arrow function: doing something")
    return 123;
}
const functionOutput=arrowFunction();
console.log("Arrow function: ",functionOutput);

//Note: there are several syntaxes for an arrow function