// -- Object basics --

// Object can be created with {...} with optional properties.
// A property is a "key:value" pair, where key is string and value can be anything.

// An empty object can be created using two ways:

let obj1 = new Object();    // "object constructor" syntax
let obj2 = {};              // "object literal" syntax

// Literals and properties

// We can immediately put some propeties inside {...} as "key:value" pairs
// We can have multiword keys but we need to put them inside quotes
let user = {                // an object
    name:"Husniddin",       // key = name, value = "Husniddin"
    age:18,                 // key = age, value = 18
    "likes world":false,    // last property can end with comma
}

//  There are no limitations for key names 
let obj = {
    for:"this is word for loop",
    let:"this is for variable"
}
console.log(obj);

// We can read, add and remove properties

// We can access property value using dot with key
console.log(user.name);     // "Husniddin"
console.log(user.age);      // 18

// We can add new property by obj.key = value syntax
user.hairColor = "Black";  // adding hairColor:"Black"
user.gender = "Male"
console.log(user);

// To remove a property, we can use delete operator
// delete obj.key
delete user.gender;
console.log(user);

// For multiword key's value we can't access it with dot
// We have "square brackets notatons" for that
// obj["key"] -> with this we can access, change, delete or create a property
delete user["likes world"];     // deleting property
console.log(user);              

user["can fly"] = false;         // creating new property
console.log(user);
console.log(user["can fly"]);    // accessing its value
user["can fly"] = true;          // changing value
console.log(user);

// We can put variable inside square brackets
// We can't use dot notation like this
let valueName = "second language";
user[valueName] = "English";
console.log(user);

// Computed properties
// We can use [] brackets in an object literal, when creating an object.

let fruit = "apple";
let bag = {
    [fruit]:10
};
console.log(bag);

// Property value shorthand

let name = "Husniddin";
let age = 18;

let user2 = {
    name,       // same as name:name
    age         // same as age:age
}
console.log(user2)

// We can access any property even it doesn't exist. It will just return undefined.
let obj3 = {};
console.log(obj3.noSuchProperty === undefined); // true
let user3 = {
    name:"Husniddin",
    age:18
};

//  in checks is property exict or not 
console.log("name" in user3);       // true
console.log("blabla" in user3);     // false

// looping objects

// for(key in obj){} -> gives keys
for(let key in user3){
    console.log(key, user3[key]);
};