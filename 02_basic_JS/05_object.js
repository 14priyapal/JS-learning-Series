/* Object destructuring allows you to extract properties from an object and assign them to variables in one clean line.
 */

// basic syntex
const user = {
  name: "Priya",
  age: 23,
  city: "Lucknow"
};

const { name, age, city } = user;

console.log(name); // Priya
console.log(age);  // 23
console.log(city); // Lucknow

//  Rename Variables, You can rename while extracting:
const { name: userName, age: userAge } = user;
console.log(userName); // Priya
console.log(userAge);  // 23
