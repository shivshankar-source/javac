//Array Methods (map, filter, reduce, forEach)
/*JavaScript provides several built-in array methods that simplify data manipulation. Among the 
most commonly used are map(), filter(), reduce(), and forEach()
These methods allow developers to perform various transformations, filtering, and aggregation tasks on arrays*/
 
//1.map     The map() method creates a new array by applying a provided function to each element in the original array.

//syntax; const newArray = array.map(callback(currentValue, index, array));

const ar=[1,2,3,4];
const nwar=ar.map(num=>num*num);
console.log(nwar);
/*note: .map() 1.starts looping through the numbers array.
2.The first element (1) is assigned to num, and the function num * num runs.
3.The result (1) is stored in a new array.
4.The same process repeats for all elements.    */

//2.filter:The filter() method creates a new array containing only elements that satisfy a specified condition.
// syntax:  const newArray = array.filter(callback(currentValue, index, array));
// ex1:
const ar1=[1,2,3,4,5];
const nwar1=ar1.filter(num=>num%2===0);
console.log(nwar1);

//ex2:
const arr2=[18,15,19,20,64];
const nwarr2=arr2.filter(age=>age>=18);//mention the condition that you needed 
console.log(nwarr2);


//3. reduce()

//The reduce() method applies a function to accumulate array elements into a single value.
//syntax:array.reduce((accumulator, currentValue) => {operation to perform}, initialValue);
// ex 1.sum of all elements in array
let arr3=[1,3,5,7,9,11];
let nw_arr2=arr3.reduce((sum,num)=>sum+num,4);
console.log(nw_arr2);
//ex.2 max element in array
const arr4=[50,40,2,18,19]
const nw_arr4=arr4.reduce((max,num)=>Math.max(max,num),arr4[4])
console.log(nw_arr4);




//forEach()
/*syntax:  array.forEach((element, index, array) => {
     Code to execute on each element});

   1.  element → The current element being processed.
   2. index (optional) → The index of the current element.
   3 array (optional) → The full array being iterated.
   
   
   
 When NOT to Use .forEach()?
 When you need a new array → Use .map().
 When you need to filter elements → Use .filter().
 When you need to accumulate values → Use .reduce()

*/
//ex.1 printing all elemnts in array
 const arr5=[1,2,3,4,5,67,8];
    arr5.forEach(num => console.log(num));
 // ex2. printing values along with index
 const arr6=["apple","banana","mango"];   
    arr6.forEach((fruits,sno) => console.log( `Fruit:${fruits} sno:${sno}`));

//ex3.
const nos = [1, 2, 3, 4];
const nosE=[];
 nos.forEach(num => nosE.push(num*num));//use push or pop to modify while usning forEach
 console.log(nosE);
 
 //summing all nos
 const arrsum=[1,2,3,4,5,6,7,8,9];
 let sum=0;
   arrsum.forEach(num => sum+=num);
   console.log(sum);
   /*Method

   Returns New Array
   
   Modifies Original Array
   
   Use Case
   
   Performance
   
   map()
   
   Yes
   
   No
   
   Transformation
   
   Fast
   
   filter()
   
   Yes
   
   No
   
   Filtering
   
   Moderate
   
   reduce()
   
   No
   
   No
   
   Aggregation
   
   Moderate
   
   forEach()
   
   No
   
   Yes
   
   Side Effects
   
   Fast*/