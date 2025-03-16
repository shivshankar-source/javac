/*
let a = 10, b = 3;
console.log(a + b, a - b, a * b, a / b, a % b, a ** b); 

let x = 5;
x += 2; 
console.log(x); 

console.log(a == "10", a === "10", a != b, a > 5, a <= 9);

let isLoggedIn = true, hasPermission = false;
console.log(isLoggedIn && hasPermission, isLoggedIn || hasPermission, !isLoggedIn);

let count = 5;
console.log(count++, ++count, count--, --count);

let speed = 80;
console.log(speed > 60 ? "Over Speeding" : "Normal Speed");


*/

//Control Flow (if-else, switch)
//if-else


//ex1
let number1=20;
if(number1%2==0){
    console.log("even number")
} 
else{
    console.log("odd number")
} 
//2 ex
let age1 = 17;
if (age1 >= 18) {
  console.log("You can vote!");
} else {
  console.log("You are not eligible to vote.");
}
//nested elseif statement ex
let marks=90;
if(marks>=90 ){
     console.log("a plus")} 
else if(marks>=75 ){
console.log("a")}
else if(marks>=60){
console.log("b-plus")}
 else{
console.log("failed!")}


/*switch (expression) {
    case value1:
      // Code executes if expression === value1
      break;
    case value2:
      // Code executes if expression === value2
      break;
    default:
      // Code executes if no match is found
  }
  */
 let day=7
 switch(day){
    case 1:
     console.log("sunday")
     break;
    case 2:
     console.log("monday")
     break;
    case 3:
    console.log("tuesday")
    break;
    case 4:
    console.log("wednesday")
    break;
    case 5:
     console.log("thursday")
     break;
    case 6:
    console.log("friday")
    break;
    case 7:
    console.log("saturday")
    break;
    default:
    console.log("invalid day")
 }
 let light="green";
 switch(light){
    case"red":
    console.log("stop ");
    break;
    case"yellow":
    console.log("wait");
    break;
    case"green":
    console.log("go");
    break;
    default:
    console.log("construction site");  
  } 


  //JavaScript Loops (for, while, do-while) – Demo & Examples
  /*for (let n= 1; n < 11; n++) {
    console.log(n);
    }
    */
       /* for (let n=1 ; n < 11; n+=2) {
        console.log(n);
        }
        */
     let x=1;
     while (x<=5) {
        console.log(x);
        x+=2;
    }

    //print the number greater than 100 inseries
    let l=5;
    while (l<100) {
        l*=2;
        } 
      console.log  (l)

// do while demo
let dw=20;
do {
   dw +=8
   } while (dw<200)
      console.log(dw);

//printing number 1 to 5
let nm=0
do {
    nm+=1
    console.log(nm);
} while (nm<5);

    
