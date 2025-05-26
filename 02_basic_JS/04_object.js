// you can neast the object also
const Office = {
        "officename" : "Microsoft",
        location: "Pune",
        
        manager: {
                "teamName": "Zoho",
                "task": 4,
                "isDone": false,
        }

}

console.log(Office)
console.log(Office["manager"])

/* 
1. Spread Operator (...) for Objects
The spread operator copies all enumerable properties of an object into a new object.
It’s often used for cloning or merging objects. 
*/
// Merging Two Objects
const user = {name : "Priya", lname: "Pal", age: "22"};
const address = {country:" India", state:"Utter Pradesh"}
const result = {...user, ...address}
console.log(result)

// Cloning an Object
const user1 = { name: "Priya", age: 22 };
const cloneUser = { ...user1 };
console.log(cloneUser);

// Overriding Values
const original = { name: "Priya", age: 20 };
const updated = { ...original, age: 25 };
console.log( updated);

/* Object.assign()
Object.assign(target, ...sources) copies properties from source objects to the target object.
It modifies the target object and returns it. */

// Cloning an Object
const user3 = { name: "Priya", age: 22 };
const cloned = Object.assign({}, user3);
console.log(cloned); 

// Merging Objects
const obj1 = { name: "Priya" };
const obj2 = { age: 22 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged);

// Overwriting Target Object
const target = { name: "Old Name" };
const source = { name: "New Name", age: 23 };
Object.assign(target, source);
console.log(target); 


// object inside arrays (this tells you , how values are arrives from database)

const dbUser = [
        {
                id: 12,
                name:"Aditya",

        },

        {
                email:"some@gmail.com"
        }
]

dbUser[1].email

//if you want to all values of the object you can simply
// this return a array
console.log("Keys:", Object.keys(Office));

// you also access the value like wise, this also return a array
console.log("Values:", Object.values(Office));

// entries() -> this function simple convert the each key value pairs into arrays pair
console.log("Entries:", Object.entries(Office));

//hasOwnProperty(), this return a boolan reault 
console.log("Has Location?:", Office.hasOwnProperty('location'));
