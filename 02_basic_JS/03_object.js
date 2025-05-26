/************************************JS Objects*************************************
The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. 
Objects can be created using the Object() constructor or the object initializer / literal syntax. */
//we will talk about object constructor later


// creating object by literal method
const JsUser = {
        // in object there will be keys ans values
        "full name": "Priya Pal",
        profession: "Student/Learner",
        address: ["Utter Pradesh", "Pin-Code", "274405"],


}

// to access the object values
//1. method (by using .)
console.log(JsUser.address)

//2. method to access the value of object (by using [])
console.log(JsUser["address"])


// to override the value of objects or update the value of object
JsUser.profession = "Software Engineer";
 
// you can  also freeze the object, that pause the any updation with object values (this method also call "lock")
// Object.freeze(JsUser)


// you can aslo declare a function in object
JsUser.greeting =  function(){
        console.log("Hope....!, you doing well");
}

JsUser.greetingTwo = function(){
        console.log(`Hello ${this["full name"]}, Welcome to Microsoft Office.`)
}

// console.log(JsUser)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());
