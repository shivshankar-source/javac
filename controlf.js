//Block scope {}
//everything  inside braces is a block ie all statements inside braces is cnsidered as block
{
let a=20;
let b=30;
console.log(a+b);
}
//Note :var is a function scoped not blocked scoped 
var av=10;
{
var av=20;
}
console.log(av);//20
//in case of let take an example
let al=10;
{
let al=20;
console.log(al);//20
}
console.log(al);//10
//Note so use let or const 



//Conditional statements
//if else statement
let age =19;
if(age>=18){
    console.log("eligible for vote");}
    else {
        console.log("not eligible for vote")    
    }

//multiple elseif
let marks=90;
if (marks>=90) {
    console.log("a grade");
    }
    else if (marks>=80) {
        console.log('b grade ');
        
    } else if(marks>=70){
        console.log('c grade');
        
    }
    else{console.log('failed');
    }
/*  1. Use single quotes (') by default.
2. Use double quotes (") when dealing with JSON.
3. Use backticks (``) for template literals and multi-line strings. */
    
//falsy values in js
if (false) console.log("Truthy!");  // ❌ Not executed
if (0) console.log("Truthy!");      // ❌ Not executed
if ("") console.log("Truthy!");     // ❌ Not executed
if (null) console.log("Truthy!");   // ❌ Not executed
if (undefined) console.log("Truthy!"); // ❌ Not executed
if (NaN) console.log("Truthy!");    // ❌ Not executed
if (-0) 
    console.log("yes i am executeable"); 


//Falsy values in Boolean() conversion
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

/*Truthy Values
Everything that isn't falsy is truthy. Some common truthy values:

"Hello" (Non-empty string)
42 (Any non-zero number)
{} (Empty object)
[] (Empty array)
function() {} (Any function)
"false" (String containing "false")
"0" (String containing "0") */

//implementation of truthyy values
if ("hello") console.log("i am exucatable");
if ([]) console.log("i am exucatable");
if ("false") console.log("i am exucatable");
if ({}) console.log("i am exucatable");
if (42) console.log("i am exucatable");
//type conversion to boolean
console.log(Boolean({}));
console.log(Boolean(2));

//switch statements
let fruits='apple';
switch (fruits) {
    case "apple":
        console.log("i am apple");
        break;
    case "banana":
      console.log("i am banana");
        break;
    default:
        console.log('i am nothing');
    break;
}
   //here in javascript we not usingg braces as they not compulsory 



   //EXCEPTION HANDLING IN JS
   try {
   let a=10/0;
   let b=10/m;
   } catch (e) {
    console.log("an error occured",e.message);
    }
    //this code doesnt run as 10/0 is infinity and catch block doesnot throw an error
    //In this case, e.message accesses the message property of the Error object.The .message property of the error object contains the error description.

   try {
    let a=12;
    console.log(a.toUpperCase());
    
   } catch (e) {
    console.log("an error occured",e.message);
    
   }finally{
    console.log('iam finally block');
   }
//in this code a.toUpperCase() is new thing it works only on string a datatypes and also e.message,message string is imp?/
/* full execution flow of try catch block
1.The code enters the try block.
2.num.toUpperCase() causes an error (TypeError).
3.JavaScript stops executing and jumps to the catch block.
4.The error object is created and passed to catch(error).
5.error.message is printed.
6.The finally block runs, ensuring cleanup. 


Error Object Properties
1.When an error occurs, an Error object is created, which has:

2.message → Error description
3.name → Type of error (ReferenceError, TypeError, etc.)
4.stack → Call stack (useful for debugging)
 stack prooerties
 The call stack is a mechanism that keeps track of function execution in JavaScript.

When a function is called, it is pushed onto the stack.
When a function finishes executing, it is popped off the stack.
If an error occurs, JavaScript captures the current call stack and stores it in the error.stack property.
*/

//HOW THROW CUSTOM ERRORS
function agef(age) {
    if (age<18) {
        throw new Error("you are not eligible for vote");//throw new Error(" string")this line is treated as keyword 
    }
    return "acess granted"
}
try {
    console.log(agef(17));
    
} catch (e) {
    console.log("error occured",e.message);
    
    
}

//practical example of  try catch block or custom error handling
function devide(a,b) {
    if (b==0) {
        throw new Error("cannot devide by zero");
    }
return a/b;
}
try {
    console.log(devide(2,0));
    
} catch (e) {
    console.log("Error name:",e.message);
    
}
