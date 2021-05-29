//create function that recieves a grade and return a grade after the factor
//factor is: newGrade=10*Math.sqrt(oldGrade)
//On the main script take as input a grade from the user and display the grade after the function call
//demends:
//1. the function need to throw an exception if the sent grade is not invalid (not between 0 to 100)
//2. the code that calls the function must not crash even for illegal input
"use strict";
(function () {
    function addFactor(grade) {
        if (grade < 0 || grade > 100) {
            throw new Error("Invalid grade input, grade must be between 0 to 100");
        }
        return 10 * Math.sqrt(grade);
    }
    const grade = +prompt("Enter a grade between 0-100:");
    try {
        console.log(addFactor(grade));
    } catch (error) {
        console.log("Error is thrown: ", error);
    }
    console.log("Program didn't crash!");
}())