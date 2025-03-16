//template string[template literal]
/*Multi-line strings
String interpolation (inserting variables)
Embedding expressions inside strings
Using dynamic content easily
✅ Introduced in ES6 (ECMAScript 2015)
✅ Uses backticks (``) instead of quotes (' ' or " ")*/


//multiline comments
//old way
const text = "Hello everyone,\nWelcome to JavaScript!";
console.log(text);
//new way
const text1 = `Hello everyone,
Welcome to JavaScript!`;
console.log(text1);

//expression inside teplate literal`  `
const a=10;
const b=20;
console.log(`the sum of ${a} and ${b} is:${a+b}`);


//calling fucnction inside teplate literal
const greet=function (name) {
    return `hello ${name}`;
}
console.log(`Message:${greet("shiv")}`);

//using template literal with objects
const obj={
    type:"gift",
    price:1000,
    precious:"yes" 
}
console.log(`Type:${obj.type} ,price:${obj.price} ,precious:${obj.precious}`);


/*
function highlight(strings, ...values) {
    return strings.map((str, i) => `${str} 🔥 ${values[i] || ""}`).join("");
}

const name = "Alice";
const age = 25;

console.log(highlight`My name is ${name} and I am ${age} years old.`);
// ✅ Output: My name is 🔥 Alice 🔥 and I am 🔥 25 🔥 years old.
