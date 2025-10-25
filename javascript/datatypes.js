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

// Warning: null and undefined have no methods

let text = "hello"
console.log(text.toUpperCase());

// 1) wraps the primitive in a temporary object

// 2) creates string object
// new String("hello")

// 3) calls the string method
// String.prototype.toUpperCase()

// 4) returns a new primitive value -> "HELLO"

// 5) destroys the temporary object (the primitive itself remains unchanged)


// -- More ways to write number --

// using underscore 
let number = 1_000_000_000; // let number = 1000000000
let billion = 1e9; // let billion = 1000000000 -> 1 with 9 zeroes
let microsecond = 1e-6; // let microsecond = 0.000001 -> 1 and five zeroes

console.log(number);
console.log(billion);
console.log(microsecond);


// -- Methods of regular numbers --

// toString(base)

let number2 = 255;

console.log(number2.toString(2)); // returns binary of 255
console.log(number2.toString(16)); // returns hexadecimal of 255
console.log(8..toString(2)) // if you want to call methods withour variable use double . 

// parseInt(str, base)
console.log(parseInt("1000", 2)); // takes str and base and changes it to decimal. This is 8.

// Rounding

// Floor:
// Rounds down. 3.1 -> 3 and -1.1 -> -2

console.log(Math.floor(3.1));
console.log(Math.floor(-1.1));

// Ceil
// Rounds up. 3.1 -> 4 and -1.1 -> -1

console.log(Math.ceil(3.1));
console.log(Math.ceil(-1.1));

// Round
// Rounds to nearest integer. 3.1 -> 3 and 3.5 -> 4 and -3.5 -> -3

console.log(Math.round(3.1));
console.log(Math.round(3.5));
console.log(Math.round(-3.5));

// toFixed(decimalPlace)
let sum = 0.1 + 0.2;
console.log(sum); // 0.30000000000000004
console.log(sum == 0.3); // our eyes tell us that this is true but it is false because sum is 0.30000000000000004
console.log((0.1 + 0.2).toFixed(1)); // we tell show with only one decimal place with toFixed -> 0.3
console.log((0.1 + 0.2).toFixed(1) == 0.3); // true -> 0.3 == 0.3

// IsNaN & IsFinite

// IsNaN check is it NaN or not

console.log(isNaN("text")); // true
console.log(isNaN(NaN)); // true

// IsFinite returns true if it is not NaN / Infinity / -Infinity

console.log(isFinite(NaN)); // false
console.log(isFinite("Text")); // false
console.log(isFinite(Infinity)) // false
console.log(isFinite("123")) // true

// parseInt(string)
// In real life we have units like 100px or currencies like 10$. We want to get only numbers. parseInt does that
// It stops when it see first letter or dot

console.log(parseInt("a123")) // a123 -> NaN
console.log(parseInt("123a")) // 123a -> 123
console.log(parseInt("123a1")) // 123a1 -> 123
console.log(parseInt("12.3a")) // 12

// parseFloat is the same but it returns float nums

console.log(parseFloat("12.3a")) // 12.3
