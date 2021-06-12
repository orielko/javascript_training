"use strict";
function getRandomNumber() {
    const lowerLimit = arguments[0][0];
    const limit = arguments[0][1];
    return Math.floor(Math.random() * (limit + 1 - lowerLimit) + lowerLimit);
}
function getArray(size, elementGenerator, elementGeneratorArgs) {
    const arr1 = [];
    for (let index = 0; index < size; index++) {
        arr1.push(elementGenerator(elementGeneratorArgs));
    }
    return arr1;
}
function getPoint(lowerLimit, limit) {
    const x = getRandomNumber(lowerLimit, limit);
    const y = getRandomNumber(lowerLimit, limit);
    return { x, y }
}

function getPizza() {
    return {
        diameter: getRandomNumber([5, 40]),
        slices: getRandomNumber([1, 16]),
        topping: getRandomNumber([0, 10]),
        price: getRandomNumber([1, 200])
    };
}
//ex1
const ex1Array = getArray(20, getRandomNumber, [1, 100]);
ex1Array.forEach(x => ex1Div1.innerHTML += `${x} <br>`);
ex1Div2.innerHTML = ex1Array.find(x => x % 2 === 0);
ex1Div3.innerHTML = ex1Array.find(x => x > 50);
ex1Div4.innerHTML = ex1Array.filter(x => x % 2 !== 0);
ex1Div5.innerHTML = ex1Array.filter(x => x > 50);
ex1Div6.innerHTML = ex1Array.findIndex(x => x > 50);
ex1Div7.innerHTML = ex1Array.map(x => x % 2 === 0 ? x + ' Even' : x + ' Odd');
ex1Div8.innerHTML = ex1Array.reduce((prev, cur) => cur < prev ? cur : prev);
ex1Div9.innerHTML = ex1Array.reduce((prev, cur) => cur > prev ? cur : prev);

//ex2
const ex2Array = getArray(20, getPoint, [1, 100]);
ex2Array.forEach(item => ex2Div1.innerHTML += `(${item.x},${item.y}) <br>`);
const xBiggerYPoint = ex2Array.find(point => point.x > point.y);
ex2Div2.innerHTML = `(${xBiggerYPoint.x},${xBiggerYPoint.y})`;
const yBiggerThan50 = ex2Array.find(point => point.y > 50);
ex2Div3.innerHTML = `(${yBiggerThan50.x},${yBiggerThan50.y})`;
const xOdd = ex2Array.filter(point => point.x % 2 !== 0);
xOdd.forEach(item => ex2Div4.innerHTML += `(${item.x},${item.y}),`);
const yBiggerThan50Arr = ex2Array.filter(point => point.y > 50);
yBiggerThan50Arr.forEach(item => ex2Div5.innerHTML += `(${item.x},${item.y}),`);
const xBiggerThan50 = ex2Array.findIndex(point => point.x > 50);
ex2Div6.innerHTML = `Index: ${xBiggerThan50}`;
const distance = ex2Array.map(point => Math.sqrt(point.x * point.x + point.y * point.y));
distance.forEach(item => ex2Div7.innerHTML += `${item} ,`);
const minX = ex2Array.reduce((prev, cur) => cur.x < prev.x ? cur : prev);
ex2Div8.innerHTML = `Min X: ${minX.x}`;
ex2Div9.innerHTML = `Min X point: (${minX.x},${minX.y})`;

//ex3
function getPizzaString(pizza) {
    if (pizza !== undefined)
        return `Diameter: ${pizza.diameter},slices: ${pizza.slices},topping: ${pizza.topping},price: ${pizza.price} <br>`;
}
function printPizza(output, pizzaArray) {
    debugger;
    pizzaArray.forEach(pizza => {
        output.innerHTML += getPizzaString(pizza);
    });
}
const ex3Array = getArray(20, getPizza);
ex3Array.forEach(pizza => ex3Div1.innerHTML += getPizzaString(pizza));
const firstPizzaNoTopping = ex3Array.find(pizza => pizza.topping === 0);
ex3Div2.innerHTML = getPizzaString(firstPizzaNoTopping);
const firstPizzaCheapPrice = ex3Array.find(pizza => pizza.price < 30);
ex3Div3.innerHTML = getPizzaString(firstPizzaCheapPrice);
const personalPizza = ex3Array.filter(pizza => pizza.diameter <= 20);
personalPizza.forEach(pizza => {
    ex3Div4.innerHTML += getPizzaString(pizza);
});
const expensivePizza = ex3Array.filter(pizza => pizza.price > 80);
expensivePizza.forEach(pizza => {
    ex3Div5.innerHTML += getPizzaString(pizza);
});
const noToppingPizzaArr = ex3Array.filter(pizza => pizza.topping === 0);
noToppingPizzaArr.forEach(pizza => {
    ex3Div6.innerHTML += getPizzaString(pizza);
});
const firstSixSlicesIndex = ex3Array.findIndex(pizza => pizza.slices === 6);
ex3Div7.innerHTML = `Index: ${firstSixSlicesIndex === -1 ? 'None' : firstSixSlicesIndex}`;
const pizzaRadious = ex3Array.map(pizza => pizza.diameter / 2);
pizzaRadious.forEach(r => {
    ex3Div8.innerHTML += r + ', ';
});
const pizzaVatPrices = ex3Array.map(pizza => {
    return { price: pizza.price, vat: pizza.price * 1.17 };
});
pizzaVatPrices.forEach(p => {
    ex3Div9.innerHTML += `price: ${p.price}, vat: ${p.vat} <br>`;
});
const pizzaPriceSum = ex3Array.reduce((totalPizza, curPizza) => { 
    const price=totalPizza.price + curPizza.price; return {price}; })
ex3Div10.innerHTML += `sum: ${pizzaPriceSum.price} <br>`;

const pizzaPriceMax = ex3Array.reduce((prevPizze, curPizza) =>  prevPizze.price>curPizza.price?prevPizze:curPizza)
ex3Div11.innerHTML += `Most expensive pizza: ${pizzaPriceMax.price} <br>`;
ex3Div12.innerHTML += `Most expensive pizza: ${getPizzaString(pizzaPriceMax)} <br>`;
