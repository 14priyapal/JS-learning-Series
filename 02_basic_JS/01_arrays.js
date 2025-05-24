/* JavaScript Arrays
- Arrays are non-primitive data types.
- They are actually a type of object.
- Arrays are resizable and can contain mixed data types.
- Copy operations create shallow copies.
*/

// Declaring arrays
const myArr = [2, 4, 7, 2, 3, "Hello", 1.4];
const arr = new Array("Apple", "Mango", "Banana");

console.log("myArr[6]:", myArr[6]); //  1.4
console.log("myArr[0]:", myArr[0]); //  2

// 1. push() → Adds an element to the end of array
let animals = new Array("Cow", "Ox", "Lion", "Fox");
animals.push("Elephant");
console.log("animals after push:", animals); //  ["Cow", "Ox", "Lion", "Fox", "Elephant"]

// 2. pop() → Removes the last element
let trees = new Array("Mangotree", "Guavatree", "Neemtree");
let removedTree = trees.pop();
console.log("removed tree:", removedTree); //  Neemtree
console.log("trees after pop:", trees);    //  ["Mangotree", "Guavatree"]

// 3. includes() → Checks if value exists
let numbers = new Array(1, 2, 3, 4, 5);
console.log("includes 3?:", numbers.includes(3)); //  true

// 4. indexOf() → Returns index of an element
let greetTypes = new Array("Namaste", "Hello", "Hola");
console.log("Index of 'Hello':", greetTypes.indexOf("Hello")); //  1

// 5. unshift() → Adds element to beginning
let rollNumbers = new Array(2, 3, 4, 5, 6, 7);
rollNumbers.unshift(0);
console.log("rollNumbers after unshift:", rollNumbers); //  [0, 2, 3, 4, 5, 6, 7]

// 6. shift() → Removes first element
let courses = new Array("MCA", "BCA", "BBA", "MBA");
let firstCourse = courses.shift();
console.log("removed course:", firstCourse);   //  MCA
console.log("courses after shift:", courses);  //  ["BCA", "BBA", "MBA"]

//  7. join() → Converts array to string
let nums = [1, 2, 3, 4, 5];
console.log("joined with comma:", nums.join());         //  "1,2,3,4,5"
console.log("joined with dash:", nums.join(" - "));     //  "1 - 2 - 3 - 4 - 5"

// 8. slice() → Returns a portion without modifying the original
let fruits = new Array("Apple", "Mango", "Grapes", 9);
let slicedFruits = fruits.slice(1, 3);
console.log("sliced fruits:", slicedFruits);   //  ["Mango", "Grapes"]
console.log("original fruits:", fruits);       // ["Apple", "Mango", "Grapes", 9]

// 9. splice() → Modifies array (remove/replace/add)
let arr1 = [1, 2, 3, 4, 5];
let splicedItems = arr1.splice(2, 2, 99, 100); // removes 3,4 & adds 99,100
console.log("removed items by splice:", splicedItems); //  [3, 4]
console.log("arr1 after splice:", arr1);               //  [1, 2, 99, 100, 5]
