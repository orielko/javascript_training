"use strict";
const printMyName = function () {
    document.writeln('ori');
};
printMyName();

const callbackCallerFunction=function(callback){
    console.log(callback);
    callback();
}
callbackCallerFunction(()=>document.writeln('ori'));
callbackCallerFunction(printMyName);

callbackCallerFunction(()=>document.writeln( Math.random()));

function nice(callback){
    callback(42);
}
nice((number)=>document.writeln(number));

function amazing(callback){
 const num=callback(42,128,37,81,66);
 document.writeln('num: '+num);
}
amazing( function (a,b,c,d,e){
    return arguments[Math.floor(Math.random()*5)];
});

callbackCallerFunction(()=>{document.body.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);
})

function colorGreen(printCallback){
    printCallback("Green");
}
colorGreen((color)=>document.body.style.backgroundColor=color);

function amazingPaintback(paintCallback){
    const paintedColor=paintCallback("red","Green","Blue");
    document.write("Paint Color:"+paintedColor);
}

amazingPaintback(function (colorA,colorB,colorC) {
    return document.body.style.backgroundColor=arguments[Math.floor(Math.random()*3)];
})

setInterval(()=>console.log(Math.floor(Math.random()*101)),1000);