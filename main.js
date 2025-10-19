"use strict";

// There 8 types in JavaScript
// 7 primitive types: string, number, boolean, null, undefined, symbol, bigint
// number integer or floating point or infinity or -infinity or NaN
// bigint for very large integers and n at the end means bigint
// string sequence of characters
// boolean true or false
// null unknown value
// undefined unassigned value
// symbol unique identifier
// 1 non-primitive type: object

// number
let num;
num = 1;
console.log("number:", num); 
console.log(1/0); // infinity
console.log("a"/2); // NaN
console.log(NaN ** 0); // 1
console.log(3 + NaN); // NaN

// bigint
let bigInt;
bigInt = 1234567890123456789012345678901234567890n;
console.log("bigint:", bigInt);

// string
let name = "Husniddin";
console.log(name);
console.log(`Hello ${name}`);

// boolean
let isGreateer = 1 < 5;
console.log(isGreateer);

// null
let age = null;
console.log(age);

// undefined
let surname;
console.log(surname);
