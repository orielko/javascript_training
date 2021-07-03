class Book {
    constructor(name, author, publisher, price) {
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
    }
    displayDetails(displayElement) {
        displayElement.innerHTML =
            `Name: ${this.name},
        Authoer:${this.author},
        Publisher:${this.publisher},
        Price:${this.price}`;
    }
    getTaxPrice() {
        return this.price * 0.17;
    }
}
export default Book;
