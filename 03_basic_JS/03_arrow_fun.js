// Arrow Functions and This keyword
/*
An arrow function is a shorter way to write a function in JavaScript introduced in ES6 (ECMAScript 2015).
Arrow functions are great for things like .map(), .filter(), .forEach(), etc.
 */

// let see how can we declare a arrow Functions
// 1. method -> with multiple parameters
const greet = (name, age) => {
        return `Hello, my name is ${name} and I'm ${age} years old`;
}

console.log(greet("priya", 23));

// 2. method -> with one parameter (No paranthese needed)
const sayHi = name =>{
        return `Hi, ${name}`;
}
console.log(sayHi('priya'));

// 3. method -> with no parameters
const hello = () =>{
        return 'Hello, JavaScript...!';
}
console.log(hello());

//4. method -> short form (implicit return )
const square = n => n*n;
// you can also write this above function like this  -> const square = n =>( n*n);
console.log(square(25));

/********************************this keyword*******************************
 The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run.
*/

const test = {
  prop: 42,
  func() {
    return this.prop;
  },
};

console.log(test.func());
// Expected output: 42
