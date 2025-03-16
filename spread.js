/*# Spread Operator (`...`) in JavaScript

## 1. What is the Spread Operator?
- The spread operator (`...`) expands **arrays, objects, and function arguments** into individual elements.
- It allows for easy copying, merging, and modifying data structures.

### **Basic Example:**
```javascript
const arr = [1, 2, 3];
console.log(...arr); // Output: 1 2 3
```

---

## 2. Spread Operator with Arrays
### ✅ **1. Copying an Array (Shallow Copy)**
```javascript
const original = [10, 20, 30];
const copy = [...original];
console.log(copy); // [10, 20, 30]
```

### ✅ **2. Merging Two Arrays**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]
```

### ✅ **3. Adding Elements to an Array**
```javascript
const numbers = [2, 3, 4];
const newNumbers = [1, ...numbers, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]
```

### ✅ **4. Finding the Maximum Value**
```javascript
const nums = [10, 50, 25, 75, 5];
const maxNum = Math.max(...nums);
console.log(maxNum); // 75
```

---

## 3. Spread Operator with Objects
### ✅ **1. Copying an Object**
```javascript
const person = { name: "Alice", age: 25 };
const copyPerson = { ...person };
console.log(copyPerson); // { name: "Alice", age: 25 }
```

### ✅ **2. Merging Objects**
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }
```

### ✅ **3. Overriding Properties**
```javascript
const user = { name: "John", age: 30 };
const updatedUser = { ...user, age: 35 };
console.log(updatedUser); // { name: "John", age: 35 }
```

---

## 4. Spread Operator in Function Arguments
### ✅ **Passing an Array to a Function**
```javascript
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```

---

## 5. Difference Between Spread (`...`) and Rest (`...`) Operators
| Feature      | Spread (`...`) | Rest (`...`) |
|-------------|---------------|-------------|
| Purpose     | Expands elements | Collects multiple arguments |
| Use Case    | Arrays, Objects, Function calls | Function parameters |
| Example     | `[...arr]` (copy array) | `function(...args) {}` |

### ✅ **Example Showing Both**
```javascript
function sum(...numbers) {  // Rest Operator (collects values)
    return numbers.reduce((acc, num) => acc + num, 0);
}
const nums = [1, 2, 3];
console.log(sum(...nums));  // Spread Operator (expands array)
```

---

## 6. Summary
| Use Case | Example |
|----------|---------|
| Copy an array | `const newArr = [...arr];` |
| Merge arrays | `const merged = [...arr1, ...arr2];` |
| Find max/min | `Math.max(...arr);` |
| Copy an object | `const newObj = {...obj};` |
| Merge objects | `const mergedObj = {...obj1, ...obj2};` |
| Function arguments | `sum(...arr);` |

**The spread operator makes JavaScript cleaner, more flexible, and readable. 🚀**/

