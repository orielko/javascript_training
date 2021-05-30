"use strict";
let arr = [];
let arrSum = 0;
const max = 50;
for (let i = 0; i < 100; i++) {
    let num = Math.random() * max;
    arr.push(num);
    arrSum += num;
}
alert(`Array is: ${arr}`);
alert(`Sum is: ${arrSum} ,average is: ${arrSum / arr.length}`);