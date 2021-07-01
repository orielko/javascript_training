function getRandomInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min + 1);
}

function getArrayWithRandomNumbers(size: number): number[] {
    const numberArr: number[] = [];
    for (let i = 0; i < size; i++) {
        numberArr.push(getRandomInRange(100, 200));
    }
    return numberArr;
}

function displayArr(arr: number[]): void {
    document.getElementById("resDiv").innerHTML = JSON.stringify(arr);
    console.log(document.getElementById("ok"));
    console.log(JSON.stringify(arr));
}

// let size: number = parseInt(prompt("Please enter the array size:"));
// const numbersArr: number[] = getArrayWithRandomNumbers(size);
// displayArr(numbersArr);

enum Color {
    Red = "Red",
    Green = "Green",
    White = "White",
    Black = "Black",
    Orange = "Orange"
}

function printColorItem(color: Color): void {
    const itemRes: HTMLElement = document.getElementById("itemWithColor");
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

let color:Color=Color.Orange;
printColorItem(color);
color=Color.Orange;
printColorItem(color);
color=Color.Black;
printColorItem(color);
color=Color.Green;
printColorItem(color);
color=Color.White;
printColorItem(color);
color=Color.Red;
printColorItem(color);
