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

// -- Primitive datatypes --

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
let isGreater = 1 < 5;
console.log(isGreater);

// null
let age = null;
console.log(age);

// undefined
let surname;
console.log(surname);

// -- Type conversion --

// String conversion

let value = true;
value = String(value); // changes true to "true"
console.log(typeof value);

let num2 = 123;
num2 = String(num2); // changes 123 to "123"
console.log(typeof num2);

// Number conversion

// Arithmetic operators (-, *, /, %, **) convert strings to numbers.
// Only the + operator does NOT — it concatenates if either operand is a string.

let divideString = "10" / "2"; // changes both strings to numbers to divide them
console.log(divideString);
console.log("6"-"2");

let str = "123";
str = Number(str); // changes "123" to 123
console.log(typeof str);

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("    ")); // 0
console.log(Number("text")); // NaN

// Boolean conversion

console.log(Boolean(1)) // true
console.log(Boolean(12)) // true
console.log(Boolean("text")) // true

console.log(Boolean(0)) // false
console.log(Boolean("")) // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)) // false


// -- How primitive data type methods work --

// Warning null and undefined have no methods

let text = "hello"
console.log(text.toUpperCase());

// 1) wraps the primitive in a temporary object

// 2) creates string object
// new String("hello")

// 3) calls the string method
// String.prototype.toUpperCase()

// 4) returns a new primitive value -> "HELLO"

// 5) destroys the temporary object (the primitive itself remains unchanged)
