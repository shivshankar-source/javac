//JavaScript classes provide a way to create objects using a structured, reusable blueprint. 

// Inheritance allows one class to inherit properties and methods from another, promoting code reusability.

//A class is a template for creating objects. It contains properties (variables) and methods (functions).basic
//creating a classs
class Bus{
    constructor(company,price) {
        this.company=company;
        this.price=price;
    }
    emp(){
        console.log(`The company is ${this.company} and price:${this.price}`);
    }
}
const bus1=new Bus("Thar",800000);
bus1.emp();
// inheritance inclass
class Feature extends Bus{
    constructor(company,price,color,seats,lights){
        super(company,price);//must be called before all the new parameters
        this.color=color;
        this.seats=seats;
        this.lights=lights;
        
    }
    emp2(){
        console.log(`Sir actually we have ${ this.color} of ${this.company} having lights of ${ this.lights} with ${ this.seats} that comes under ${ this.price}`);
        
    }
}
const tharDetails=new Feature("Thar",800000,"Black",4,"neon");
tharDetails.emp2();//new method
tharDetails.emp();
// older parameters  to be written before you add nw ones

//Overriding in javascript

/*Method Overriding in JavaScript occurs when a child (or derived) class provides a specific implementation of a method that is already defined in its parent (or base) class. The overridden method in the child class replaces or
 modifies the behavior of the parent method when it's called on the child class instance.*/

 // calling method syntax:class,sobjectname.methodname();
 //example of overriding or method overriding
   
 class family{
   person(){
    console.log("It is for demo");
   }
 }
 class members extends family {
    person(){
        console.log("I am member one");//overridng main class
    }
 }
 const obj=new family();
 const obj1=new members();
 obj.person();//when we use super class object it gathers inf present in super class
 obj1.person();// similarlyy when we use extended class  then it gathers information from that class.

 //2 overriding using super keyword
 class Parent {
    greet() {
        console.log("I am from parent class");
        
    }
 }
class Child extends Parent {
    greet() {
        super.greet();//calls greet from parent class
        console.log("I am from child class");
    }
}
const objp=new Child();
objp.greet(); 













































































































































































































