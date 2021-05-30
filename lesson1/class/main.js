//Variables
var a=10;
console.log(a);
//var pitfalls:
//there are issues with the scope (where this variable is available)
//we should not use "var" anymore

//"let" is developed in ES 6 / ES2015
let b=20;
console.log(b);

//"const" is also developed in ES 6 / ES2015
//once "const" is assigned it can't be changed again
//with const we must initiate the variable with data
const c=30;
console.log(c);

//Data types: (not strongly typed language)
//Three disadvantages:
//1. No compiler
//2. Not strongly typed
//3. Poor object oriented
//All of those are fixed in TypeScript

//JavaScript types: 7 types
//the value determine which variable type the variable will be
let d=123;
console.log("Number:",d,typeof d);

let e="123";
console.log("String:",e,typeof e);

let f=true;
console.log("Boolean:",f,typeof f);

let g={model:"s6", manifacturer:"BMW"}; //Literal Object - object that we created it with {} and not with class, not like: new Car()
console.log("Object:",g,typeof g);

let h=function(){alert("hello");}
console.log("Function:",h,typeof h);

let i=Symbol("test"); //symbol is like a key, an identifier, used for a structure for example, developed in ES6
console.log("Symbol:",i,typeof i);

let j;
console.log("Undefined:",j,typeof j);

//Null is an Object in JS
let l=null;
console.log("Bonus: Null:",l,typeof l);

//Falsy VS Truthy
//Falsy - 6 values which translate to false in a condition
//Truthy - infinite (all except the 6 Falsy's) values which translate to true in a condition
//The false values:

//let falseValue =0;
//let falseValue=NaN;
//let falseValue=false;
//let falseValue=undefined;
//let falseValue=null;
let falseValue="";

if(falseValue){
    console.log("Truthy value",falseValue);
}else{
    console.log("Falsy value",falseValue);
}

//Abstract comparison ( == or != ) , there is no reason to use ==
//Use Strict comparison instead: === or !==, JS will do two comparations: one for the types, second for the value
console.log(null==undefined);//true
console.log(false==0);//true
console.log(true==1);//true

//JavaScript will enforce the types, therefore it will convert the string to number
console.log(78=="78");//true

//Literal Objects:
const myCat={
    name:"Miu",
    age:4,
    color:"black",
    insideObj:{test:1}
};

//adding attribute inside the object is possible:
myCat.food="milk";
console.log(myCat);

//delete attributes:
delete myCat.food;
console.log(myCat);

//for-in (must write: const, let otherwise it will be a Global variable)
for(const prop in myCat){
    console.log(prop);
    console.log(prop,myCat[prop]);
}

console.log(myCat.insideObj["test2"]);//undefined
console.log(myCat.insideObj.test2);//undefined
console.log(myCat.insideObj.test);//prints 1

//arrays:
const arr1=[10,20,30];
arr1.push(40);
arr1.push(50);
//insert in place 10 will put all the rest with empty slots
arr1[10]=60;
console.log(arr1,arr1.length);

//an array with 10 empty values- not usfull at all, better to always use [] for arrays
const arr2=new Array(10);
console.log(arr2,arr2.length);

for (let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

//for collection we better use this for-of: (and not the one above, foreach in other languages)
//notice that items are won't affect the original item in the array
for (const item of arr1){ //without index
    console.log(item);
}

//concatenation VS string interpolation , performance are depended on the browser implementation actually
const firstName="Moish";
const age=30;
let msg1="First name: "+firstName+ " , age: "+age;
console.log(msg1);
let msg2=`First name: ${firstName} , age: ${age}`;
console.log(msg2);
console.log(msg1===msg2); //true

let msg3=`First name: 
${firstName}
age: 
${age}`;
console.log(msg3);

//functions:
function doSomthing(num,flag=true,options){
    if(options && options.header)
        console.log(options);
    console.log(num,flag);
    //in JS we can take the "overflow" arguments if those are sent 'arguments' (which is saved word on JS)
    console.log(arguments);
}

doSomthing(11);
doSomthing(12,false);
doSomthing(12,false,"lala");

//Kind of JS function overloading (the JAVA way with the number of params won't work)
//first way: put the logic inside with IF, and check for undefined params
//second way: give default values to the arguments in the function params
//third way: add one param with the name "options"
doSomthing(13,undefined,{header:"my header"});

//Null chaining operator
function printCat(cat){
    console.log(cat["name"]);
    console.log(cat["age"]);
    //for the null chaning write:
    if(cat.address && cat.address.city) console.log(cat.address.city);
    //write it with null chaning operator:
    if(cat.address?.city) console.log(cat.address.city);


}

printCat({name:"mitsi",age:2,address:{city:"rishon",street:"ben yehuda"}});
printCat({age:2,address:{city:"rishon",street:"ben yehuda"}});
//error will be thrown "cannot read property 'city' of undefined":
printCat({name:"mitsi",age:2});

//reaching non existing props in console.log goes to window variables incase the variable does not exist in the scope, and therefor it's doesn't break the code

//Set
const items=new Set();
items.add("one");
items.add("two");
items.add("three");
//will do nothing:
items.add("three");

for(const item of items){
    console.log(item);
}

console.log(items.has("two"),items.size);

const itemsMap=new Map();
itemsMap.set("one",1);
itemsMap.set("two",2);
itemsMap.set("three",3);

console.log(itemsMap,itemsMap.get("one"));
//loop on map:
for (const key of itemsMap.keys()){
    console.log(key,itemsMap.get(key));
}
for (const value of itemsMap.values()){
    console.log(value);
}
for (const entry of itemsMap.entries()){
    console.log(entry,typeof entry);
}

//Dialogs:
//alert("shit");
// const input=prompt("oh ya");
// console.log(input);
// const answer=confirm("are you sure?");
// console.log(answer);
