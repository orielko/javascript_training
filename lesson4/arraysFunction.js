"use strict";
const arr = [];

//Filling the array with 20 random numbers (0 to 99)
for (let i = 0; i < 3; i++) {
    const num = Math.floor(Math.random() * 5);
    arr.push(num);
}
//printing the array
document.getElementById("arrayDiv").innerText = arr;
//find the first even number larger than 50:
let max;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > 50) {
        max = arr[i];
        break;
    }
}
document.getElementById("forRes").innerText = max;

//find predicate (נשוא- על מי מדברים) is: (value,index,array) => return true if found, return false if not found ON each iteration
const maxRes = arr.find(value => value > 50 && value % 2 === 0);
document.getElementById("findRes1").innerText = maxRes;

//find first number ends with 7 smaller than 80:
const secondResFind = arr.find(value => value % 10 === 7 && value < 80);
document.getElementById("findRes2").innerText = secondResFind;

//find all even numbers:
const evenRes = arr.filter(n => n % 2 === 0);
document.getElementById("filterRes").innerText = evenRes;

//Calculate powers- for each number calculate it's power- create a different array with the 
const powerRes = arr.map(n => n * n);
document.getElementById("powerRes").innerText = powerRes;

//Each number in arr is a grade, create a different array where each item is a happy smily if the grade is pass
const gradesRes = arr.map(n => n > 60 ? ':)' : ':(');
document.getElementById("gradesRes").innerText = gradesRes;

//Each number in arr is a grade, create a different array where each item is a happy smily if the grade is pass
//prev is the retured value from the previous iteration, reduce can also get a second parameter for the initial value (...)=>(function,initial value)
const sumRes = arr.reduce((prev, cur) => prev + cur, 1);
document.getElementById("sumRes").innerText = sumRes;

//find the max number with reduce
const maxResReduce = arr.reduce((prev, cur) => prev > cur ? prev : cur);
document.getElementById("maxResReduce").innerText = maxResReduce;

//find the sum of all even numbers
const sumEvenResReduce = arr.reduce((prev, cur) => cur % 2 === 0 ? cur + prev : prev, 0);
document.getElementById("sumEvenResReduce").innerText = sumEvenResReduce;

//find the average number with reduce
const averageResReduce = arr.reduce((prev, cur, index, array) => {
    if (index === array.length-1) {
        return (prev + cur) / array.length;
    }
    return prev+cur;
},0);
document.getElementById("averageResReduce").innerText = averageResReduce;

document.write('Dynamic prints: <br>');
document.write('display on the page all the even numbers: <br>');
arr.forEach(n=>n%2===0?document.write(n+' '):undefined);

document.write('display on the page all the numbers with new line:<br>');
arr.forEach(n=>document.write(n+'<br>'));

document.write('display on the page all powers:<br>');
arr.forEach(n=>document.write(n*n+' '));

document.write('<br>');
document.write('print an array of powers:<br>');
arr.filter(x=>x%2===0).map(x=>x*x).forEach(n=>document.write(n+' '));
