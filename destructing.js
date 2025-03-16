//destructing allows to extarct valiues from arra or objects and easil stores  avlues in variable
//1) in array

let arr=[1,2,3,4,5];
const[first,second]=arr;//herewecan use any variable name
console.log(first,second);

//in objects
const obj={name:"shiv",id:202,post:"engineer"};
const{name,id}=obj;//in objects onlyy write keyy name while destructing
console.log(name,id);

//destruct with default values in objects
let cart={fruit1:"apple",fruit2:"mango",Fruit3:"banana"};
let{fruit1,cost1=20,fruit2,cost2=100}=cart;//here cost1,cost2 are default values
console.log(fruit1,cost1=20,fruit2,cost2=100);


//Destructuring in Function Parameters in JavaScript,,,through extracting value from the object in function

const f1=({name,age})=>{
    console.log(`Name:${name},Age:${age}`);
}
f1({name:"shiv"});//age is missing so it takes age as undefined //Name:shiv,Age:undefined
f1({name:"shiv",age:29})//Name:shiv,Age:29
/*The function displayUser accepts an object as a parameter.
Instead of accessing properties using user.name or user.age, it destructures { name, age } from the function parameter itself.
When we call displayUser({ name: "Sam", age: 28 }), the object { name: "Sam", age: 28 } is passed.
The function extracts name and age from the object and logs;
Name: Sam, Age: 28*/


//2. Spread Operator (...)
//spread  is used to copy and merge objects and arrays
//a.merging arrays
 const arr3=[1,2,9,9];
 const arr4=[5,6,7,7];
 const arrm=[...arr3, ...arr4];
 console.log(arrm);
 //b.copying to another one
 const arr5=[10,90,70];
 const arr5c=[...arr5];
 console.log(arr5c);
 //c.merging and copying objects
 const obj3={name:"dk",id:10};
 const obj4={country:"India"} ;
 const obj34c={...obj3, ...obj4};
 console.log(obj34c);
 //d.adding new properties to objects
 const obj5={sub1:"English",sub2:"Hindi"};
 const obj5n={...obj5,sub3:"Math"}
 console.log(obj5n);
 //3. Rest Operator (...)
//a.using in fucntion  for taking remaining that come in after its call
const f1r=(...numbers)=>{//take inputs that comes
    return numbers.reduce((sum,number)=>sum+number,0);//takes number comesfrom rest operator and reduce it and give a result in one value
};
console.log(f1r(1,2,3,4));//input and output is provided fromhere
//b.rest while destruting object
const obj6={a:97,b:98,c:99,d:100};
const {a,b,...abc}=obj6;//rest is not a keyword
console.log(abc);
//rest  in array destructing
const arr7=[10,21,12,34,28,80];
const [num,num1, ...ab]=arr7;
console.log(ab);


