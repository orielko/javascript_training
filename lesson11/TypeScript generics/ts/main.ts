import Test from "./Test.js";

//setting the type from the variable type
const test=new Test("ABC");
test.display();
test.add("A");
//test.add(2); //type error
//setting the type from the variable type
//const test2=new Test<number>("ABC"); //type error
const test2=new Test<number>(2);
test2.display();
//test2.add("A"); //type error
test2.add(3);
