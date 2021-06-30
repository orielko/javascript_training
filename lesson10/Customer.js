"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person_js_1 = require("./Person.js");
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(firstName, lastName, creditCard) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.creditCard = creditCard;
        return _this;
    }
    // Function Override:
    Customer.prototype.display = function () {
        _super.prototype.display.call(this); // Call Person's display
        console.log("Credit Card: ", this.creditCard);
    };
    return Customer;
}(Person_js_1["default"]));
exports["default"] = Customer;
