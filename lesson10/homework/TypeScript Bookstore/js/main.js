import Book from "./Book.js";
let harryPotterBook = new Book("Harry potter", "J.K rowling", "Bloomsbury", 50);
let hungerGamesBook = new Book("The hunger games", "Suzanne Collins", "Scholastic", 70);
let wikiLeaksBook = new Book("WikiLeaks", "David Leigh", "Guardian Books", 100);
harryPotterBook.displayDetails(document.getElementById("book1"));
hungerGamesBook.displayDetails(document.getElementById("book2"));
wikiLeaksBook.displayDetails(document.getElementById("book3"));
document.getElementById("book1tax").innerHTML = harryPotterBook.getTaxPrice() + '';
document.getElementById("book2tax").innerHTML = hungerGamesBook.getTaxPrice() + '';
document.getElementById("book3tax").innerHTML = wikiLeaksBook.getTaxPrice() + '';
