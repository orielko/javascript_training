"use strict";
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min) + 1;
}
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}