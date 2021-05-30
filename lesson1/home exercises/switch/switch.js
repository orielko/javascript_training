"use strict";
let grade = +prompt("Please enter grade:");
if (typeof grade !== 'number' || isNaN(grade) || grade < 0 || grade > 100){
    alert("Error, you must enter a number between 0-100 for the grade");
}
console.log(grade>90);
//We want JS to check all the cases and not to look for exact match, so we will use 'true' on the switch and not 'grade',
//if we were using 'grade' we need a case for each grade (0,1,2...100), and when we are using 'true' if will search for the first
//condition on the case which is truthy
switch (true) {
    // case true:
    //     alert("Could be the first match");
    //     break;
    case grade>=90:
        alert("Very Good");
        break;
    case grade>=80:
        alert("Good");
        break;
    case grade>=70:
        alert("Almost good");
        break;
    case grade>=60:
        alert("Enough");
        break;
    case grade>=50:
        alert("Not enough");
        break;
    default: //grade is between 0 and 50
        alert("Fail");
        break;
}