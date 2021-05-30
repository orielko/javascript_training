"use strict";
let arr=[];
for (let index = 0; index < 10; index++) {
    let number=+prompt(`(${index+1}) Enter a number: `);
    arr.push(number);
}
alert(`The array: ${arr}`);
let max=arr[0];
for(const item of arr){
    max=item>max?item:max;
}
alert(`Max input value is ${max}`);
