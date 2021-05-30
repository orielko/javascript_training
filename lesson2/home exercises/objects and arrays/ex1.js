"use strict";
let phone={
    model:"Galaxy S20",
    manifacturer: "Samsung",
    price:1800,
    screenSize:4
};
alert(`model: ${phone.model},
manifacturer: ${phone.manifacturer},
price: ${phone.price},
screen size: ${phone.screenSize}`);
function displayProps(phone){
    for(const prop in phone){
        alert(`${prop}: ${phone[prop]}`);
    }
}
displayProps(phone);
phone.os="Andorid 10";
alert(`os: ${phone.os}`);
displayProps(phone);



