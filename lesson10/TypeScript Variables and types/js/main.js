let age;
age = 25;
//age="hello"; //error
console.log(age);
let a = 123; //less common to write the type if it was initialized
console.log("a", a);
//a="hello"; //type error
let b = 123; //recognizes the type from the initializtion
console.log("b", b);
//b="hello"; //type error
let c;
c = 123;
console.log("c", c);
c = "hello"; //this is not an error! it will choose "any" type for this variable
console.log("c", c);
let d; //not recommended
d = 123;
console.log("d", d);
d = "hi";
console.log("d", d);
let e; //union type
e = 123;
console.log("e", e);
e = "hi";
console.log("e", e);
//e=true; //type error
let f = [];
f.push(10);
f.push(20);
//f.push("hi"); //type error
console.log("f", f);
let g = {};
//g.name="ori"; //error, configured only empty object
console.log("g", g);
let g2;
g2 = {
    name: "ori",
    age: 31
};
//g.color="blue"; //type error
console.log("g2", g2);
