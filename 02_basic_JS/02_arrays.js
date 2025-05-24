// Array declarations
let marvle_heros = ["thor", "ironman", "spiderman"];
let dc_heros = ["batman", "superman", "flash"];

// This will NOT merge both arrays correctly
// It adds the entire 'dc_heros' array as a single element in 'marvle_heros'
console.log(marvle_heros.push(dc_heros)); // Output: 4 (new length), marvle_heros is now a nested array

// Let's see what happened to marvle_heros
console.log(marvle_heros); 
// Output: ["thor", "ironman", "spiderman", ["batman", "superman", "flash"]]

// Correct way 1: Using concat() - returns a NEW array, does not change original arrays
const all_heros = marvle_heros.concat(dc_heros);
console.log(all_heros);
// Output: ["thor", "ironman", "spiderman", ["batman", "superman", "flash"], "batman", "superman", "flash"]
// Notice the nested array added earlier still exists in marvle_heros

// Correct way 2: Using spread operator (...) - cleaner and modern
const all_super_heros = [...marvle_heros, ...dc_heros];
console.log(all_super_heros);
// Output: ["thor", "ironman", "spiderman", ["batman", "superman", "flash"], "batman", "superman", "flash"]

// Flattening nested arrays using flat()
const complex_array = [1, 2, 3, [4, 5], 6, [7, [8, 9, 10, [11, 12], 4]], 90];

// flat(Infinity) flattens the array completely, no matter how deeply nested it is
const usable_array = complex_array.flat(Infinity);
console.log(usable_array);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 4, 90]


// checking the given value is array or not
console.log(Array.isArray("Hitesh"));

// converting non array to array
console.log(Array.from("Hitesh"));

console.log(Array.from({name: "Priya"}))


let n1 = 100
let n2 = 200
let n3 = 400
let n4 = 500

// output [ 100, 200, 400 ]
console.log(Array.of(n1, n2, n3));
