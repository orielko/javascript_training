"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.display = function () {
        console.log("First name: ", this.firstName);
        console.log("Last name: ", this.lastName);
    };
    return Person;
}());
exports["default"] = Person;
