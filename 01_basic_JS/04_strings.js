const name = "Priya";
let age = 21;


// let's see how many ways you can define a strings in JavaScript
const string4 = new String("A String object");

// in javaScript string can be define using double quotes "",  single quotes'', or backticks
const firstName = "Priya";
const lastName = 'pal';
const nickName = `lovely`;

const birthMonth = "   March";
// you can also perfom string concatenation using + operator, this operator help you to add two string let's see how
console.log(firstName+lastName)
 // the output will be Priyapal

/*
there are many types of function in string that helps you to performs operation on strings some are as follows :
1. length()
2. trim() -> this function is use to remove the white space from the string
3. replace()
4. toUpperCase()
5. toLowerCase()
6. split() -> The split() function in JavaScript is used to split a string into an array based on a specified separator.
7. slice()->The slice() method in JavaScript is used to extract a portion of a string (or an array) and return it as a new string (or array), without modifying the original. you can write a well string.slice(startIndex, endIndex);

 etc you can reacd about all function from MDN documnetation
 */


//let's use this above function for understanding
console.log(firstName.length)
console.log(birthMonth.trim());

// in replace there is two parameters the first one is old and the new value you have to replace it 
console.log(nickName.replace("lovely","priyaaaaa"))


console.log(nickName.toUpperCase());

/*The split() function in JavaScript is used to split a string into an array based on a specified separator.
in split function there will be two argument/parameters, the first one is 1.separator - (Required) The character or pattern where the string should be split,
and the second one is 2.limit->	(Optional) A number that limits the number of splits
 */
let sentence = "I love JavaScript";
let words = sentence.split(" ");
console.log(words);


//slice, always remember the first argument number is included and the second argumnet number is excluded
console.log(firstName.slice(0,3)); 
