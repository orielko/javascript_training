"use strict";
//anonumous function is an inline function without the function name
const anonFunction=function(){
    console.log("Anonymous function: doing something...");
    return 123;
}

const x=anonFunction();
console.log("Anonymous function:",x);