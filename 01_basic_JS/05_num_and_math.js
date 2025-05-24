// toFixed()
// toPrecision()
// toLocaleString()
// MAX_VALUE, MIN_VALUE




/***************************Maths*****************************/
// Math.abs() - this function is use to convet the negative value to positive, but not positive value to negative | positive, positive me rahta hai but negative positive me convert ho jata hai
let num = -10;
console.log(Math.abs(num));

// Math.round() -> in JavaScript is a built-in function that rounds a number to the nearest integer
let decNum = 4.509;
console.log(Math.round(decNum));

//Math.ceil()-> Math.ceil() is useful when you always want the smallest integer that is greater than or equal to the number.
let decNum2 = 4.1;
console.log(Math.ceil(decNum2));

// Math.floor()->that rounds a number down to the largest integer less than or equal to the given number.
let decNum3 = 9.4;
console.log(Math.floor(decNum3));

//Math.sqrt() -> this function is used to calculate the square root of the give number
let number = 3;
console.log(Math.sqrt(number));


//Math.pow()-> It means “base multiplied by itself exponent times.” its take tow arguments
let n1 =4, n2 = 3; // output will be 64
console.log(Math.pow(n1, n2));


// Math.random() -> this function always give you a random value from 0 to 1 
console.log(Math.random()) 

//  it prints a random decimal number between 1 and 11 (not including 11).
console.log((Math.random()*10) + 1);

// this line of code will give you a random number from 1 to 11 excluding 11 and the number will be not in decimal
console.log(Math.floor((Math.random()*10) + 1));

const min = 10;
const max = 20;
// this line of code give the random value from 10 to 20 in single digit
console.log(Math.floor(Math.random() * (max-min+1)) + min);
