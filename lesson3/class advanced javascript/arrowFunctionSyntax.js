"use strict";
//Long syntax
function doWork(callback) {
    console.log('Start');
    const x = callback(10, 20, 30);
    console.log('x: ', x);
    console.log('End');
}

doWork(function (a, b, c) {
    console.log(a, b, c);
    return 123;
});

doWork((a, b, c) => {
    console.log(a, b, c);
    return 123;
});

//Short syntax: (single arguments) , for one argument we can remove the round brackets

function doWork2(callback) {
    console.log('Shorten single argument Start');
    const x = callback(10);
    console.log('x: ', x);
    console.log('Shorten single argument End');
}

doWork2(function (a) {//we can't shorten that
    console.log(a);
    return 123;
});

doWork2(a => {
    console.log(a);
    return 123;
});

//Single command line short syntax: we don't need curly brackets if it's only single command line
function doWork3(callback) {
    console.log('Single command line short Start');
    const x = callback(10, 20, 30);
    console.log('Single command line short End');
}

doWork3(function (a, b, c) {//we can't shorten that
    console.log(a, b, c);
});

doWork3((a, b, c) =>
    console.log(a, b, c)
);

//Single return - if the arrow contains only a return command, we can reduce curly brackets and the semicolon and the return keyword
function doWork4(callback) {
    console.log('Single return: Start');
    const x = callback(10, 20, 30);
    console.log('Single return: x: ', x);
    console.log('Single return: End');
}

doWork4(function (a, b, c) {
    return a + b + c + 123;
});

doWork4((a, b, c) => a + b + c + 123);