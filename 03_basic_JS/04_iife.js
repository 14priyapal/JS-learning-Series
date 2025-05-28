// Immediately Invoked Function Expression, It’s a function that runs immediately after it is defined.

// basic syntax to define a IIFE
(function () {
        console.log('I ran Immediately!');
})();
// Note -> alway remember to put a semicolon ; after the IIFE function 

// defining the IIFe using arrow function
(() =>{
        console.log('I ran instantly with arrow function!');
})();


/*Notice:
The function is wrapped in parentheses () to treat it as an expression.
It is followed by () to invoke it immediately.
*/

/* Why Do We Use IIFE?
Before ES6 introduced let and const, all variables declared with var were function-scoped. IIFE was used to avoid polluting the global scope.
When combining multiple scripts, IIFE ensures your variables/functions don’t interfere with others.
*/
(function () {
  var secret = "This is hidden";
  console.log(secret); // works here
})();

//console.log(secret); // Error: secret is not defined

(function greet(){
        // named IIFE -> (greet)
        const name = "Priya";
        console.log('App initialize');
        return {name};
})();
