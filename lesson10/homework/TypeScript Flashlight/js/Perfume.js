export class Perfume {
    constructor(name, company, gender, amount, price) {
        this.name = name;
        this.company = company;
        this.gender = gender;
        this.amount = amount;
        this.price = price;
    }
    displayDetails(displayElement) {
        displayElement.innerHTML =
            `Name: ${this.name},
        Company:${this.company},
        Suitable for:${this.gender},
        Amount:${this.amount},
        Price:${this.price}`;
    }
    getTaxPrice() {
        return this.price * 0.17;
    }
}
export var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));
