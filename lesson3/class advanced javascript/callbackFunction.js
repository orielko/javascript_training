"use strict";
//Callback function is a function assignment or inline function or anonymous function which is sent to another function argument
//usually we will see anonymous functions 
const anonFunctionForCallback=function(){
    console.log("Callback function: doing something...");
    return 123;
}

//usually the argument name will be: callback or cb
function doWork(someFunction){
    someFunction();
};

doWork(anonFunctionForCallback);
doWork(anonFunction);
doWork(doSomething);
doWork(myFunction);
doWork(()=>{console.log("Arrow function: doing something...");
return 123;});
