//"use strict";
//scopes: where the variable or the function are known and therefor we can use them

//Hoisting (להניף למעלה) - it's an action that JS perform with variables and functions, 
//the JS takes the function and the variables declarations and raising them to the begining of the scope. (without the initialization)
//Hosting exists only for "var", and it takes it to the scope of the function, for "var" there are only two scopes: Global scope and function scope.
//On the same way JS takes all the above functions , therefor we can call a function before the function decleration.
function f(){
    console.log("a",a); //undefined

    var a=10;
    console.log("a",a); //10
    if(a>0){
        var b=20;
        console.log("b",b); //20
    }
    console.log("b",b); //20
    if(a>100){
        var c=30;
        console.log("c",c); //won't enter
    }
    console.log("c",c); //undefined

}
f();

//JS Hoisting will look like:
function f_after_js_hoisting(){
    var a,b,c;
    console.log("a",a); //undefined
    a=10;
    console.log("a",a); //10
    if(a>0){
        b=20;
        console.log("b",b); //20
    }
    console.log("b",b); //20
    if(a>100){
        c=30;
        console.log("c",c); //won't enter
    }
    console.log("c",c); //undefined
}

//Replacing with "let" (block scope variable):
function f_with_let(){
    //console.log("a",a); //crash - cannot access 'a' before initialization
    let a=10;
    console.log("a",a); //10
    if(a>0){
        let b=20;
        console.log("b",b); //20
    }
    //console.log("b",b); // 'b' is not defined
    if(a>100){
        let c=30;
        console.log("c",c); //won't enter
    }
    //console.log("c",c); // 'c' is not defined

}
f_with_let();

//Consts: (const variable must be initialized)
//const a; //crash - Missing initializer in const declaration
const a=5;
//const a=10;//crash - Identifier 'a' has already been declared

//String is Immutable - the object cannot be changed (it will stay in the memory)
//memory will contain two objects: {"Hi","Bye"} and "Hi" object will be a "zombie" without a reference for it
//and the garbage collector will delete it
let s1="Hi";
s1="Bye";
console.log(s1[0]);
//s1[0]="C"; //won't do anything OR crash if in Strict Mode
console.log(s1[0]);
//Strict Mode - JS more Strict mode which JS will warnning or error if the programmer code doesn't make sense
//Strict mode needs to be declared on the top of the file;
//s1[0]="C"; //will crash with strict mode

//Window variables (Global variables)
function doWork(){
    myCat={name:"mimi",age:5}; //should never do undeclared variables AND if we are in Strict Mode it will crash: myCat is not defined
    console.log(myCat);
}
doWork();
console.log(myCat);//same as "window.myCat"
console.log(window.myCat); 

//Closure - it's when a function is accessing a variable or function in a scope which is ABOVE the function decleration
//Even if "f1" ends, f2 will still be able to access "num2" variable because JS keeps the "num2" variable 
//It's better to avoid closure beacuse it's much slower
const num1=10;
function f1(){
    const num2=20;
    console.log(num1); //Closure
    function f2(){
        const num3=30;
        console.log(num1); //Closure
        console.log(num2); //Closure
        console.log(num3); //Not Closure
    }
    f2();
}
f1();

//Inline function - send a Function as an argument
//examlpe: doWork(function lala(){})

//When we write a function like this, it will put it on the Window object by default
function printSomthing(msg){
    console.log(msg);
}
printSomthing("Hi");
//For the above code we want to do kind of encapsulation
//  Immediately invoked function expression (IIFE): (function(){/*...*.})() ,
//      actually its a function without a name (we don't have to give a name to a function), which we call immediate
//  Good programmers write their code inside an IIFE, they don't write something before and nothing after
(function(){ //IIFE
    function printSomthing(msg){
        console.log(msg);
    }
    printSomthing("Hi");
    //window.printSomthing("Hi"); //won't work, because it's inside the IIFE
})(); //we can also write it: }())

//Types of errors: 
//1. Compilation Error - does not exist in JS
//2. Runtime Error - crashes
//3. Logic Errors - logic issues
//Exception handling
try{
    // const digits=+prompt("enter a num (not a minus)");
    // const pi = Math.PI.toFixed(digits);
    // console.log(Math.PI);
    // console.log(pi);
}catch(err){
    console.log("catched: ",err);
}

//throw - with good design , if an invalid arrgument is sent, we should not handle the arrgument validation inside the function
//we should throw an exception instead
function getVat(price){
    if(price<0){ //NEVER handle this inside the function like this If example
        //console.log("illegal price");
        throw new Error("Illegal price, price can't be negative.");
        //return;
    }
    const vatPercent=17;
    const vat=price*vatPercent /100;
    return vat;
}
try{
    //console.log( getVat(-40));//logical bug OR exception
}catch(error){
    console.log(error);
}

//Catch all - in case we want to catch an exception from anywhere in the code which we were missing catching
(function(){
    window.onerror=printError; //registering event
    function printError(msg,url,line,column,error){ //params that we are recieving if we register to this event
        console.log("some error",error);
        console.log("url",url);
        console.log("line",line);
        console.log("column",column);
        return true;
    }

    const digits=+prompt("Enter PI digits:");
    const pi=Math.PI.toFixed(digits);
    console.log(pi);
}())

