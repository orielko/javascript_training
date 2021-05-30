"use strict";
//Inline function is a function which immediatly assigned to a variable
const aInlineFunctionReference=function doSomething(){
    console.log("Inline: Doing something");
    return 123;
}
aInlineFunctionReference();

//we can't call it with the original name!
//doSomething() won't work!