/* JavaScript Scopes (Global, Local, and Block)

Scope in JavaScript refers to the area of a program where a variable is accessible.

Types of Scope:
1. Global Scope – Variables declared outside any function are accessible everywhere.

2. Local/Function Scope – Variables declared inside a function are only accessible within that function.

3. Block Scope – Variables declared with let or const inside {} are only accessible within that block (e.g., in loops or if statements).
*/

// Global Scope
let num = 23;
function add() {
    return num + num; // accesses global variable
}
console.log(add()); // Output: 46

// Local Scope (Function Scope)
function userData() {
    let name = "Priya"; // local to this function
    let age = 23;
    console.log(name, age); // Accessible here
}
userData(); 
// console.log(name);  Error: name is not defined outside the function


/* Nested scope means that a function inside another function can access the variables of its outer function.
In JavaScript, scopes are lexical, meaning they are determined by where functions and blocks are written in the code, not where they're called. */
function outerFunction() {
  let outerVar = "I'm from outer function";

  function innerFunction() {
    let innerVar = "I'm from inner function";
    console.log(outerVar); // ✅ can access outer variable
    console.log(innerVar); // ✅ own variable
  }

  innerFunction();
  // console.log(innerVar); ❌ Error: innerVar is not accessible here
}

outerFunction();
// console.log(outerVar); ❌ Error: outerVar is not accessible globally
