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




// -- Object references and copying --

// Objects are stored and copied by same refrence.
// Primitive values are copied as whole value.

// Primitive values. We put copy of nessage into phrase

let message = "hello";
let phrase = message;

// As a result we have to independent variables, each on storing the string "hello"
// message 📦 has hello and phrase 📦 has hello too but they are separate boxes which has same value.
// 📦message -> hello        📦phrase -> hello 

// A variable assigned to an object stores not object itself but its address in memory - in other word a refrence of it 

let user4 = {
    name:"Husniddin"
};

// Object has stored somewhere in the memory while variable has a refrence to it.
// When object is copied, the reference is copied, but object itself is not duplicated.

let admin = user4;

console.log(user4);
console.log(admin);

// Now we have two variables referencing to the same object.
// 📦user4 -> object <- 📦admin
// If one of them changes something it will change object and result will be displayed in both of them.
// admin changed something in object every variable which has the reference for that object will get that change.
// 📦user4 <-(change) object (change)-> 📦admin

admin.name = "John";
console.log(user4);
console.log(admin);




// Comparsion by reference
// Two objects are equal if they are the same objects

let a = {};
let b = a;              // copy reference.
console.log(a == b);    // true, both variables refrence the same object.

// two independent objects.
let a2 = {};
let b2 = {};
console.log(a2 == b2);  // false, both variables reference different objects.

// const objects can be modified.
// Because we are not changing the value of variable. We are changing object and reference is the same.
const user5 = {
    name:"Husniddin"
};
user5.name = "John";    // no error


// Cloning and merging

let user6 = {
    name:"Husniddin",
    surname:"Egamberdiyev",
    age:18
};

let new_user = {};

for(let propKey in user6){
    new_user[propKey] = user6[propKey]
}

console.log(new_user);

new_user.name = "John";     // this won't effect user6 cause new_user is independent.

console.log(user6);
console.log(new_user);

// We can also use the method Object.assign(dest, ...sources).
// dest is a target object.
// further arguments are objects which are adding to a target

let new_user2 = {};
Object.assign(new_user2, user6);

console.log(new_user2);

// if copied property name already exists, it gets overwritten.

let user7 = {name:"Husniddin"};
console.log(user7);

Object.assign(user7, {name:"John"});
console.log(user7);

// simpler version of copying.

let user8 = {name:"Husniddin", surname:"Egamberdiyev"};
let new_user3 = Object.assign({}, user8)
console.log(new_user3);


// Nested cloning

let user9 = {
    name:"John",
    sizes:{
        width:50,
        height:182
    }
};

let new_user4 = Object.assign({}, user9);

console.log(user9.sizes == new_user4.sizes);    // true. It means user9 and new_user4 has sizes which is the same object.
user9.sizes.width = 45;                         // It will change both user9 and new_user4's width.
console.log(user9);
console.log(new_user4);

// To fix this we can use structuredClone(object). It will clone even nested objects.
let new_user5 = structuredClone(user9);
console.log(user9.sizes == new_user5.sizes);    // false. They are different.
new_user5.sizes.width = 30;
console.log(user9);
console.log(new_user5);


