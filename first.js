console.log("shiv")
var no1=89;
no1=67
console.log(no1)
const no2=3

console.log(no2)


// datatpes
//String, Number, Boolean, Null, Undefined, Object, Symbol
let name= "shiv";
console.log(typeof name)

let n1=12
let n2=22.22
console.log(typeof n1)
console.log(typeof n2)

let b1=true
let b2=false
console.log(typeof b1)
console.log(typeof b2)

let m1=null
console.log(typeof m1)

let abc
console.log(typeof abc)

let bc={ name: "Alice", age: 30,salary: 30000 }; 
console.log(bc.age)
console.log(bc.salary)
console.log(typeof bc)
let car={ brand:"Alto", warranty_yrs: 30,price: 3000000 };
console.log(car.brand)
console.log(car.price)
console.log(car.warranty_yrs)
let cd=[1, 2, 3, 4];
console.log(typeof cd)


//symbol
let s1=Symbol("s");
let s2=Symbol("s");
console.log(s1===s2);

let cars={ brand:"Alto1", warranty_yrs: 40,mrp: 3000000 };
let ufield=Symbol("noplate");
cars[ufield]=1908;
console.log(cars);
console.log(cars[ufield]);

let gadi = {
    brand: "Toyota",
    model: "Camry"
};
   // gadi.color="Red"
   // gadi.color="pink"

   // console.log(gadi);
let uk1=Symbol("color");
let uk2=Symbol("color");

gadi[uk1]="Red";
gadi[uk2]="orange";
console.log(gadi);

//Arithmetic Operators (Perform mathematical calculations)
let a=9,b=4;
console.log(a - b);
console.log(a + b);
console.log(a % b);
console.log(a / b);
console.log(a ** b);

// Assignment Operators (Assign values to variables)
let m=9;
console.log(m);
 m+=2
 console.log(m);
 m*=6;
 console.log(m);
 m/=3
 console.log(m);
 m-=2
 console.log(m);
 
 
 //comparison Operators (Compare two values, returns true or false)
 let n=12,l=10;
 console.log(n=="12")
 console.log(n==="12")
 console.log(n!=l )
 console.log(n!==12 )
 console.log(n > l )
 console.log(n >= l )
 console.log(n <= l )
 console.log(n <l )

 //Logical Operators (Used with boolean values)
let lg1=true,lg2=false;
console.log(lg1 && lg2)
console.log(lg1 || lg2)
console.log(!lg2)








 //Increment & Decrement Operator
 let y=8;
 console.log(y++)
 console.log(y)
 console.log(++y)
 console.log(--y)
 console.log(y--)
 console.log(y)


 //Ternary Operator (Short if-else condition)?
 let age=10;
  let cond=(age>=20) ? "Yes eligible for vote" : "No you are not eligible for vote"
 console.log(cond);