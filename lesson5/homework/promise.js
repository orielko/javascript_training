"use strict";

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min) + 1;
}
function generate7BoomAfterDelayAsync(min, max) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = getRandomNumber(min, max);
            if (number % 7 === 0 || number % 10 === 7) {
                resolve(number);
            } else {
                reject('Error, the number is: ' + number);
            }
        }, 1000);
    });
}

function ex1(min, max) {
    const ex1Promise = generate7BoomAfterDelayAsync(min, max);
    ex1Promise.then(res => ex1result.innerText = res).catch(error => ex1result.innerText = error);
}
async function ex1b(min, max) {
    try {
        const ex1Promise = await generate7BoomAfterDelayAsync(min, max);
        ex1result.innerText = ex1Promise;
    } catch (err) {
        ex1result.innerText = err;
    }
}

function ex2(min, max) {
    const ex2Promise = getPrime(min, max);
    ex2Promise.then(
        res => ex2result.innerText = res
    ).catch(
        error => ex2result.innerText = error
    );
}

async function ex2b(min, max) {
    try {
        const res = await getPrime(min, max);
        ex2result.innerText = res;
    } catch (error) {
        ex2result.innerText = error;
    }
}

function getPrime(min, max) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                const num = getRandomNumber(parseInt(min), parseInt(max));
                console.log(num, parseInt(min), parseInt(max));
                for (let index = 2; index < num; index++) {
                    if (num % index === 0)
                        reject('NOT PRIME: ' + num);

                }
                resolve('PRIME: ' + num);
            }, 1000);
        }
    )
}

function ex3() {
    generateCuteAnimalAfterDelayAsync().then(
        res => ex3result.innerText = res
    ).catch(
        err => ex3result.innerText = err
    );
}
async function ex3b() {
    try {
        const res = await generateCuteAnimalAfterDelayAsync();
        res => ex3result.innerText = res;
    } catch (err) {
        ex3result.innerText = err
    }

}

function generateCuteAnimalAfterDelayAsync() {
    const animals = ['cat', 'puppy', 'bunny', 'parrot', 'scorpion', 'spider', 'cockroach'];
    const devilishAnimals = ['scorpion', 'spider', 'cockroach'];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randNum = getRandomNumber(0, animals.length - 1);
            if (devilishAnimals.includes(animals[randNum])) {
                reject('Not cute at all! ' + animals[randNum]);
            } else {
                resolve('Cute! ' + animals[randNum]);
            }
        }, 1000);
    });
}

function ex4() {
    generateWorkingDayAfterDelayAsync().then(
        res => ex4result.innerText = res
    ).catch(
        err => ex4result.innerText = err
    );
}
async function ex4b() {
    try {
        const res = await generateWorkingDayAfterDelayAsync();
        ex4result.innerText = res
    } catch (err) {
        ex4result.innerText = err
    }

}

function generateWorkingDayAfterDelayAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const day = getRandomNumber(1, 8);
            if (day >= 1 && day <= 5) {
                resolve(days[day - 1] + ' is a working day');
            } else {
                reject(days[day - 1] + ' is a weekend');
            }
        }, 1000);
    });
}

function ex5(size) {
    getArrayFromServerAsync(size).then(
        res => ex5result.innerText = res

    ).catch(
        err => ex5result.innerText = err
    );
}

async function ex5b(size) {
    try {
        const res = await getArrayFromServerAsync(size);
        ex5result.innerText = res;
    } catch (err) {
        ex5result.innerText = err;
    }
}

function getArrayFromServerAsync(size) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const n = getRandomNumber(1, 100);
            if (n % 2 === 0) {
                const resArr = new Array(size);
                for (let index = 0; index < resArr.length; index++) {
                    resArr[index] = getRandomNumber(1, 20);
                }
                console.log(resArr);
                resolve(resArr);
            } else {
                reject('Can not return an array');
            }
        }, 1000);
    });
}

function ex6() {
    getPizzaFromServerAsync().then(res => ex6result.innerText = res).catch(err => ex6result.innerText = err);
}
async function ex6b() {
    try {
        const res = await getPizzaFromServerAsync();
        ex6result.innerText = res;
    } catch (err) {
        ex6result.innerText = err;
    }
}

function getPizzaFromServerAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const n = getRandomNumber(1, 100);
            if (n % 2 === 0) {
                const pizza = { diameter: getRandomNumber(10, 50), price: getRandomNumber(20, 80), topping: getRandomNumber(0, 4) };
                resolve(JSON.stringify(pizza));
            } else {
                reject('Can not make pizza');
            }
        }, 1000);
    })
}

function ex7() {
    generateStrongPasswordAsync().then(res => ex7result.innerText = res).catch(err => ex7result.innerText = err);
}
async function ex7b() {
    try {
        const res = await generateStrongPasswordAsync();
        ex7result.innerText = res;
    }catch(err){
        ex7result.innerText = err;
    }
}

function generateStrongPasswordAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pass = new Array(6);
            const flags = { capitals: false, digits: false, lowerCase: false };
            for (let index = 0; index < pass.length; index++) {
                let x = getRandomNumber(48, 122);
                //0-9 a-z A-Z
                while (!((x >= 48 && x <= 57) || (x >= 65 && x <= 90) || (x >= 97 && x <= 122))) {
                    x = getRandomNumber(48, 122);
                }
                pass[index] = String.fromCharCode(x);
                if (x >= 48 && x <= 57) {
                    flags.digits = true;
                } else if (x >= 65 && x <= 90) {
                    flags.lowerCase = true;
                } else if (x >= 97 && x <= 122) {
                    flags.capitals = true;
                }
            }
            if (flags.digits && flags.lowerCase && flags.capitals) {
                resolve('Good password: ' + pass.reduce((prev, cur) => prev + cur));
            } else {
                reject(`Bad password: ${pass.reduce((prev, cur) => prev + cur)} , digits:${flags.digits}, lowerCase: ${flags.lowerCase} , capitals: ${flags.capitals}`);
            }

        }, 1000);
    });
}
