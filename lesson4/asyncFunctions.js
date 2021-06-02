"use strict";
function testSync(){
    res.innerHTML ='Start '+new Date()+ '<br>';
    const sum=doWork();
    res.innerHTML +='Sum: '+sum+ '<br>';
    res.innerHTML +='End '+new Date()+ '<br>';
    
}

//synchronous function: is any function which the calling code waits until it ends. 
//the function continue to work until it ends.
function doWork(){
    let sum=0;
    for (let index = 0; index < 1000000000; index++) {
        sum+=index;
    }
    console.log('Sum: ',sum);
    return sum;
}

function testAsync(){
    res.innerHTML ='Start '+new Date()+'<br>';
    //We can't expect to have the sum in the 'sum' variable,  later we will see the ways to get the sum
    const sum=doWorkAsyncFirst();
    res.innerHTML +='Sum: '+sum+'<br>';
    res.innerHTML +='End '+new Date()+'<br>';
    
}

//First way to do Asynchronous function, therefore sum will be undefined
function doWorkAsyncFirst(){
    setTimeout(()=>{
        let sum=0;
        for (let index = 0; index < 1000000000; index++) {
            sum+=index;
        }
        console.log('Sum: ',sum);
        return sum;
    },10);
}

//ANR- application not responding
//JavaScript is single threaded (by default), so by default (we have threads in HTML 5- so we have several call stacks), the order is:
//-async function is waiting in the Web Apis-> when it finishes it goes to the Callback Queue -> when the Call Stack is EMPTY it runs something from the Callback Queue to the Call Stack (1 by 1 , therefore is single threaded)
//Simulator on: http://latentflip.com/loupe
