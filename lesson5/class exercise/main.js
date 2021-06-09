"use strict";

function getRandomEvenNumber() {
    randomEven(result =>
        document.getElementById("result").innerText = result
        , err =>
            document.getElementById("errorResult").innerText = err
    )
}
function randomEven(onSucess, onFailure) {
    setTimeout(() => {
        const number = Math.floor(Math.random() * 100);
        if (number % 2 === 0) {
            onSucess(number);
        } else {
            onFailure(number)
        } F
    }, 3000);
}
function getRandomEvenNumberWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.floor(Math.random() * 100);
            if (number % 2 === 0) {
                resolve(number);
            } else {
                reject(number)
            }
        }, 3000);
    })
        .then(resolve => document.getElementById("result").innerText = resolve)
        .catch(reject => document.getElementById("errorResult").innerText = reject);
}

function getRandomEvenNumberWithPromiseMinMax(min, max) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.floor((Math.random() * (max - min + 1) + min));
            if (number % 2 === 0) {
                resolve(number);
            } else {
                reject(number)
            }
        }, 3000);
    })
        .then(resolve => document.getElementById("result").innerText = resolve)
        .catch(reject => document.getElementById("errorResult").innerText = reject);
}

function limitPromiseInsideFunc(limit){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('limit: ', limit);

            const number = Math.floor((Math.random() * limit));
            console.log(number);
            if (number >10) {
                resolve(number);
            } else {
                reject(number)
            }
        }, 3000);
    })
}
function getRandomNumberWithPromiseAndLimit(limit) {
    limitPromiseInsideFunc(limit).then(resolve => {
            document.getElementById("result").innerText = resolve;
            limitPromiseInsideFunc(resolve).then(
                resolve => {
                    document.getElementById("result").innerText = resolve;
                    limitPromiseInsideFunc(resolve).then(
                        resolve => {
                            document.getElementById("result").innerText = resolve;
                        }
                    ).catch(
                        reject => document.getElementById("errorResult").innerText = reject
                    );
                }
            ).catch(
                reject => document.getElementById("errorResult").innerText = reject
            );
        })
        .catch(reject => document.getElementById("errorResult").innerText = reject);
}

//'async-await' is written to solve 'callback hell' , means nested Promise calls, which are using each other outputs
//await does 3 things:
//1. waiting for the function we're calling to complete
//2. during the waiting it will frees the entire callstack and the UI won't be stack
//3. if the Promise succeeds - the await returns back the value reported by the Resolve
//must add 'async' before the function (otherwise we will have Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules)
//Exception need to be catched with try/catch
//it's a good practice to call the function name with Async at the end of it, so we will not forget to use 'await' when we are calling the function
async function getRandomNumberWithPromiseAndLimitWithAwaitAsync(limit) {
    try{
        let evenNum=await limitPromiseInsideFunc(limit);
        document.getElementById("result").innerText=evenNum;
    
        evenNum=await limitPromiseInsideFunc(evenNum);
        document.getElementById("result").innerText=evenNum;
    
        evenNum=await limitPromiseInsideFunc(evenNum);
        document.getElementById("result").innerText=evenNum;

    }catch(reject){
        console.log('reject:',reject);
    }
}