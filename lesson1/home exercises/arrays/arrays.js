"use strict";
let min = +prompt("Enter the min number");
let max = +prompt("Enter the max number");
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
let result=`The Array: [${arrPrime}]
The array sum: ${primeSum}
The array average: ${primeSum/arrPrime.length}
(calculated in: ${new Date})
`

primeResult.innerText=result;
