"use strict";

let clothes=[
    {type:"tshirt",size:"xl",price:50,color:"black"},
    {type:"tshirt",size:"l",price:30,color:"red"},
    {type:"pants",size:"s",price:150,color:"navy blue"},
    {type:"tie",size:"onesize",price:80,color:"pink"},
    {type:"coat",size:"m",price:500,color:"blue"},
];
for(const cloth of clothes){
    for(const prop in cloth){
        alert(`${prop}: ${cloth[prop]}`);
    }
}
function getAveragePrice(clothes){
    let pricesSum=0;
    for(const cloth of clothes){
        pricesSum+=cloth.price;
    }
    return pricesSum/clothes.length;
}
let averagePrices=getAveragePrice(clothes);
let resultHTMLElement=document.getElementById("resultEx3");
resultHTMLElement.innerText=`Printed Result is:  ${averagePrices}`;