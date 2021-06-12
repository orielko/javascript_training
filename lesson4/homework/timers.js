"use strict";
function getRandomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function getRandomNumber(limit){
    return Math.floor(Math.random() * (limit+1));
}
const ex1Interval = setInterval(() => {
    res1.innerText=Math.floor(Math.random() * 101);
    const color=getRandomColor();
    document.body.style.backgroundColor = color;
    res2.innerText=color;
}, 1000);
const ex2Interval = setInterval(() => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(getRandomNumber(100));
    }
    res3.innerText='['+arr.toString()+']';
}, 3000);

const ex3Interval= setInterval(() => {
    const date=new Date();
    res4.innerText=date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
}, 1000);
const ex4Interval= setInterval(() => {
    const date=new Date();
    res5.style.backgroundColor=getRandomColor();
}, 1000);

setTimeout(() => {
    alert('Welcome!');
}, 3000);