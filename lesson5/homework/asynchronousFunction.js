"use strict";
function ex1() {
    console.log("Start");
    console.log(new Date().toLocaleString());
    console.log("End");
}
function ex2() {
    console.log("Start", new Date().toLocaleString());
    setTimeout(() => console.log(new Date().toLocaleString()), 3000);
    console.log("End");
}
function ex3() {
    const time = new Date().toLocaleString();
    console.log("Start", time);
    setTimeout(() => console.log(time), 3000);
    console.log("End");
}
function ex4() {
    console.log("Start", new Date().toLocaleString());
    setTimeout(() => console.log(Math.floor(Math.random() * 101), new Date().toLocaleString()), 3000);
    setTimeout(() => console.log(Math.floor(Math.random() * 101), new Date().toLocaleString()), 5000);
    setTimeout(() => console.log(Math.floor(Math.random() * 101), new Date().toLocaleString()), 7000);
    console.log("End");
}

function ex5() {
    setInterval(() => {
        ex5result.innerText = Math.random() * inputEx5.value;
    }, 1000);
}
ex5();

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function getRandomNumber(limit, first) {
    return Math.floor(Math.random() * (limit + 1 - first) + first);
}
const ex6Interval = setInterval(() => {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
    ex6result.innerText = color;
}, 1000);

function ex6() {
    clearInterval(ex6Interval);
}
function ex7() {
    document.body.style.backgroundColor = "Green";
    alert("Done");

}
function ex7b() {
    document.body.style.backgroundColor = "Green";
    setTimeout(() => {
        alert("Done");
    }, 0);

}

function getRandomNumberAfterDelay(callback, limit = 100, first = 0) {
    setTimeout(() => {
        const num = getRandomNumber(limit, first);
        callback(num);
    }, 5000);
}
function getEvenRandomNumberAfterDelay(callback, limit = 100, first = 0) {
    setTimeout(() => {
        let num = getRandomNumber(limit, first);
        let tries = 100;
        while (num % 2 !== 0 && tries > 0) {
            num = getRandomNumber(limit, first);
            console.log(num, tries);
            tries--;
        }
        callback(num);
    }, 5000);
}

function getUserFromServer(callback) {
    setTimeout(() => {
        // Demo for getting user from the server:
        const user = { firstName: "Moishe", lastName: "Ufnik" }
        callback(user);
        // "Return" that user to the calling code.
    }, 4000);
}

function getGradesFromServer(callback) {
    setTimeout(() => {
        // Demo for getting grades from the server:
        const grades = [100, 98, 75, 80, 100, 87];
        // "Return" that array to the calling code.
        callback(grades);
    }, 7000);
}

function getCoorFromUser(resolve,reject){
    navigator.geolocation.getCurrentPosition(resolve,reject);
}

function setMyTime(cb){
    setTimeout(() => {
        cb(new Date().toLocaleTimeString());
        setMyTime(cb);
    }, 1000);
}
