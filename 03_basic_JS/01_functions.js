/* JavaScript Functions 
a function definition (also called a function declaration, or function statement)
consist of the `function` keyword followed by:
1. The name of the function.
2. A list of parameters to the function, enclosed in parentheses and separated by commas.
3. The JavaScript statements that define the function, enclosed in curly braces, { .. }
*/

// let's see how can declare a function 
function square(number) {
        return number * number
}


// suppose you have you call the function but not give any argument, and you have to print the value you get 'undefined' , let's see how?
function loginUserMessage(username) {
        return `${username} just logged in`;
}

console.log(loginUserMessage()); // undefined just logged in
console.log(loginUserMessage('Priya')); // Priya just logged in


// You can add a default parameter to make it safer:
function loginUserMessage(username = "Guest") {
        return `${username} just logged in`;
}



// most important you have to read about memeory management before function
// reference - > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management


// "The spread operator (...) and the rest operator (...) use the same syntax but are used for different purposes in JavaScript."

// Rest Operator – Used to collect multiple elements into an array (usually in function parameters or destructuring).
function sum(...numbers) {
        return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 7)) // 13


// "Let's see how an object is passed to a function and how it is handled."
const person = { name: "John", age: 25 };

function handleObject(anyobject) {
        console.log(`Username id ${anyobject.name} and the user age is ${anyobject.age}`)
}

handleObject(person);

/*
In JavaScript, when an object is passed to a function, it is passed by reference. That means the function receives a reference to the original object, not a copy. So, any changes made to the object inside the function will affect the original object.
 */

function updateUser(user) {
        user.name = "Priya";
}
const user = { name: "John", age: 25 };
updateUser(user);
console.log(user.name); // Output: "Priya"


//you can aslo pass the array to a function let's see how
const myArray = [200, 300, 400, 500, 600];
function returnMyArray(arr) {
        return arr[1]
}
console.log(returnMyArray(myArray)); // This is a good practice

