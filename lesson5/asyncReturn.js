"use strict";
//Wrong way to call an Asynchronous function "returning" a value
function test1() {
    console.log("start");
    doWork1();
    console.log("end");
}
function test2() {
    console.log("start");
    const sum = doWork2();
    console.log("Sum (outside):", sum);
    console.log("end");
}
//first way to handle async from result function - use a callback function
function test3() {
    console.log("start");
    doWork3((sum) => console.log("Sum from callback:", sum));
    console.log("end");
}

function test4() {
    try {
        console.log("start");
        doWork4((sum) => console.log("Sum from callback:", sum));
        console.log("end");
    } catch (err) {
        console.log(err);
    }
}

//Success callback and error callback design pattern:
function test5() {
    console.log("start");
    doWork5((sum) => console.log("Sum from callback:", sum), err => console.log('handled catch from log:', err), false);
    doWork5((sum) => console.log("Sum from callback:", sum), err => console.log('handled catch from log:', err), true);
    console.log("end");
}
//real life example
function test6() {
    navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        error => alert(error.message)
    )
}

//promise example
function test7() {
    console.log("start");
    const myPromise = doWork6(false);
    myPromise.then(result => console.log(result)).catch(err => console.log('Error: ', err));
    console.log("end");
    console.log("start");
    const myPromise2 = doWork6(true);
    myPromise2.then(result => console.log(result)).catch(err => console.log('Error: ', err));
    console.log("end");
}

//Promisify - converting an existing succuessCallback design pattern to Promise design pattern
async function showUserLocation(){
    try{
        const myPosition=await getPositionAsync();
        console.log(myPosition);
    }catch(err){
        console.log(err);
    }
}

function getPositionAsync(){
    return new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(
            position=>resolve(position),
            error=> reject(error)
        );
    });
}

//synchronous function - we dont have a problem
function doWork1() {
    setTimeout(() => {
        let sum = 0;
        for (let i = 1; i <= 1000000; i++) {
            sum += 1;
        }
        //even if it will work, it's not logic to do the handling of the result
        console.log("Sum:", sum);
    }, 10);
}
function doWork2() {
    let sum = 0;
    setTimeout(() => {
        for (let i = 1; i <= 1000000; i++) {
            sum += 1;
        }
        //even if it will work, it's not logic to do the handling of the result
        console.log("Sum:", sum);
    }, 10);
    return sum;
}
function doWork3(callback) {
    setTimeout(() => {
        let sum = 0;
        for (let i = 1; i <= 1000000; i++) {
            sum += 1;
        }
        callback(sum);
    }, 10);
}
function doWork4(callback) {
    setTimeout(() => {
        let sum = 0;
        for (let i = 1; i <= 1000000; i++) {
            sum += 1;
        }
        Math.PI.toFixed(-4);
        callback(sum);
    }, 10);
}
function doWork5(onSuccess, onError, fail) {
    setTimeout(() => {
        try {
            let sum = 0;
            for (let i = 1; i <= 1000000; i++) {
                sum += 1;
            }
            if (fail) {
                Math.PI.toFixed(-4);
            }
            onSuccess(sum);
        } catch (err) {
            onError(err);
        }
    }, 10);
}


function doWork6(fail) {
    //Promise get one callback into the constructor and immediately invokes it
    //We don't need to add try/catch for the error handling because promise will automatically will call the on failure 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                let sum = 0;
                for (let i = 1; i <= 1000000; i++) {
                    sum += 1;
                }
                if (fail) {
                    Math.PI.toFixed(-4);
                }
                resolve(sum);

            } catch (err) {
                //we don't have to handle this error since the Promise does it for us
                reject("my rejection");
            }
        }, 10);
    });

}


