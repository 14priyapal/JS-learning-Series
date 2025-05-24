// in javaScript date is an object represent a single moments in time in a platform independent format.
let myDate = new Date();

// output ->Sat May 24 2025 09:59:26 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toString());

// output ->Sat May 24 2025
console.log(myDate.toDateString());

// output ->2025-05-24T09:59:26.925Z
console.log(myDate.toJSON());

// output -> 5/24/2025
console.log(myDate.toLocaleDateString());

// output ->5/24/2025, 9:59:26 AM
console.log(myDate.toLocaleString());

// output -> 2025-05-24T09:59:26.925Z
console.log(myDate.toISOString());


console.log(typeof myDate);


// let see how you create you data or time
/*
1) 2025 = year 2025
2) 0 = month January (months are zero-based in JavaScript, so 0 = January, 1 = February, and so on)
3) 24 = day 24
 */
// let myCreatedDate = new Date(2025, 0, 24);
let myCreatedDate = new Date(2025, 0, 23, 5, 3)
console.log(myCreatedDate.toDateString());


// let's see about timestamps in JS
let myTimeStamp = Date.now()

// this always give you value in mili-seconds
console.log(myTimeStamp);


// let's see how to convert mili seconds into seconds
console.log(Math.floor(Date.now)/1000);


// you can also customize the .toLocaleString()
myCreatedDate.toLocaleString('default', {
         weekday: "narrow",
         minute:"numeric",

})
console.log(myCreatedDate)
