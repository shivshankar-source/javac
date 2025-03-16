/*In JavaScript, an object is a collection of key-value pairs where each key is a string (or Symbol) 
and each value can be any data type (including functions and other objects). Objects allow you to 
store and organize data efficiently.*/
//objects creation there are three ways to create objects as follows
//1️⃣ Using Object Literalusing object literals {} is shorter and preferred:
let student={
name:"shivshankar",
occupation:"student",
id:132,
greet:function() {
    console.log("my name is:"+ this.name);
}
};
console.log(student.id);
console.log(student.greet());//this is imp greet(bracket imp)//there undefined is occuring

//using new object
let employ= new Object();
employ.name="shiv";
employ.mob=123456;
employ.salary=60000;
console.log(employ.mob);

//3.using constructor function
function vehicle(brand,price,year) {
    this.brand=brand;
    this.price=price;
    this.year=year; 
    this.greet=function () {
      // return console.log("I have ,"+this.brand);//2.remove console.log
      return "I have ,"+this.brand;
    }
}
let bike=new vehicle("bike",100000,2025);

console.log(bike.price);
console.log(bike.greet());//In JavaScript, when a function does not .
//explicitly return a value, it implicitly returns undefinedSo, when you call:

//bike.greet() prints "I have, bike" to the console.
//But since greet does not return anything, console.log() prints undefined
bike.greet();//method 1




//4.Using Class (ES6)
//A modern approach using class-based object creation.
class  car{
    constructor(brand,model) {
        this.brand=brand;
        this.model=model;
    }
}
let mycar=new car("abc",202);
console.log(mycar.brand);
//help

