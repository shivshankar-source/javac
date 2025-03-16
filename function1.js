// Functions Declaration, Expressions, Arrow Functions
console.log(sum(7,9));//Hoisting Advantage:You can call add(5,3) before its definition, and it will still work.

function sum(a,b) {
    return a+b;
}
console.log(sum(3,9));
//Function with Default Parameters
function f2(person="you") {
    return `hello,${person}!`;
}
console.log(f2());
console.log(f2("shiv"));



// Function Expression   Not hoisted, meaning it cannot be called before its definition.
//demo of expression fuction
/*const functionName = function(parameters) {
    // Code to execute
    return result;
  };
  */
 //sqaure of number
  const f1=function (n2) {
    return n2*n2;
 }
 console.log(f1(5));
// note;Cannot call multiply(4,5) before its definition.

//function inside function
function operation(a,b,operate) {
    return operate(a,b);
}
  const devide=function(a,b) {
    return a/b; 
  }  

console.log(operation(12,6,devide));
//Function as an Argument (Higher-Order Function)
function greet(name, formatFunction) {
    return formatFunction(name);
  }
  
  function formalFormat(name) {
    return `Hello, Mr. ${name}`;
  }
  
  function casualFormat(name) {
    return `Hey ${name}, what's up?`;
  }
  
  console.log(greet("John", formalFormat)); // Output: Hello, Mr. John
  console.log(greet("Mike", casualFormat)); // Output: Hey Mike, what's up?
  













//arrow functionshort code  ex. 1
//(No {} or return for single-line functions)
const add=(n1,n2)=>{ 
    return n1+n2;
 }
console.log(add(2,7));
//ex.2
const greet=name=>`  hello,${ name } `;
console.log(greet());
console.log(greet("shiv"));
//set timout function
setTimeout(() => {
    console.log("help everyone");
    
    
}, 10000);





 