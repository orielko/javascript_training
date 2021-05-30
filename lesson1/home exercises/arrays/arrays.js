"use strict";
let min = +prompt("Enter the first number");
let max = +prompt("Enter the second number");
let arrPrime = [];
function isPrime(number) {
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) return false
    }
    return number > 1;
}
let primeSum=0;
for (let i = min; i <= max; i++) {
    if(isPrime(i)){
        arrPrime.push(i);
        primeSum+=i;
    }
}

alert(`The Array: ${arrPrime}
    The array sum: ${primeSum}
    The array average: ${primeSum/arrPrime.length}
`);

//TODO: check why it's not working
// let primeRes=document.getElementById("primeResult");
// debugger;
// primeRes.innerText="lala1";
// primeResult.innerText="lala";
