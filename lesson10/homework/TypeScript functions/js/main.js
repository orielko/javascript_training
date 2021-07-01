function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min + 1);
}
function getArrayWithRandomNumbers(size) {
    const numberArr = [];
    for (let i = 0; i < size; i++) {
        numberArr.push(getRandomInRange(100, 200));
    }
    return numberArr;
}
function displayArr(arr) {
    document.getElementById("resDiv").innerHTML = JSON.stringify(arr);
    console.log(document.getElementById("ok"));
    console.log(JSON.stringify(arr));
}
// let size: number = parseInt(prompt("Please enter the array size:"));
// const numbersArr: number[] = getArrayWithRandomNumbers(size);
// displayArr(numbersArr);
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["White"] = "White";
    Color["Black"] = "Black";
    Color["Orange"] = "Orange";
})(Color || (Color = {}));
function printColorItem(color) {
    const itemRes = document.getElementById("itemWithColor");
    switch (color) {
        case Color.Black:
            itemRes.innerHTML += "Black Cat ";
            break;
        case Color.Green:
            itemRes.innerHTML += "Grass ";
            break;
        case Color.Orange:
            itemRes.innerHTML += "Sun ";
            break;
        case Color.Red:
            itemRes.innerHTML += "Red Whine ";
            break;
        case Color.White:
            itemRes.innerHTML += "Snow ";
            break;
    }
}
let color = Color.Orange;
printColorItem(color);
color = Color.Orange;
printColorItem(color);
color = Color.Black;
printColorItem(color);
color = Color.Green;
printColorItem(color);
color = Color.White;
printColorItem(color);
color = Color.Red;
printColorItem(color);
