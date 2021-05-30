"use strict";
function test(x){
    return x !=x;
}
alert(`Sending NaN: ${test(NaN)}`);//true
