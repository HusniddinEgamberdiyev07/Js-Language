// -- Funtion basics --

// syntax
// function name(parameters1, parameters1, ...){
//      body
// }

// calling the function
// name(parameters1, parameters1, ...)

function sayHi(){
    console.log("Hello");
}

sayHi();
sayHi();
// We can the function as much as we want to.
// Main purpose of function is to avoid code duplication
// If we want to change hello to bye. We don't need to change everything. If we change sayHi function everything will change.


// function can access an outer variable as well
// function has full access to the outer variable ikt can modify it too

let userName = "Husniddin"

function showMessage(){
    let message = `Hello ${userName}`
    console.log(message);
}

function changeName(){
    userName = "Bob"
}

showMessage()
changeName()
showMessage()

// function will use outer variable if there is no local one.
// If there is local variable with exact name it will ignore outer variable.

let fruit = "Apple"         // global variable

function showBag(){
    let fruit = "Banana"    // we have a variable with name fruit outside of function and local one.
    console.log(fruit);     // function will ignore outer one and uses local one
}

console.log(fruit);         // fruit did not change 
showBag()

// global variable is the variable which is declared outside of function
// global variables are visible from any function if there is no the same named variable


// We can send data to function with parameters when we are calling them

function showMessageParams(from, text){
    console.log(`${from} - ${text}`);
}

showMessageParams("Husniddin", "Hello World");      // -> Husniddin - Hello World   (*)
showMessageParams("Jim", "Bye world");              // -> Jim - Bye world           (**)

// When function called in line (*) and (**), the given values are copied to local variables from and text. Then function uses them.


function showMessage2(from, text){
    from = `* ${from} * - ${text}`
    console.log(`${from}`);
}

let from = "Husniddin";

showMessage2(from, "Hehehehe");
console.log(from);

// We have  a variable "from" and pass it to a function 
// and inside function "from" changed but it won't change variable outside because functions copies "from" value.

// When value is passed as a function parameter, it is also called argument.
// We declare functions listing their parameters, then call them passing arguments.



// Default values
// If function is called and argument is not provided for parameter that parameter gets undefined value.
showMessage2(from)      // text value is undefined -> * Husniddin * - undefined
  
// We can give default value with "=" if we don't have argument

function sayHi2(name="Unknown person"){
    console.log(`${name} - Hi`);
}

sayHi2();   // Unknown person - Hi


// Return values
// Function can return value

function sum(a, b){
    return a+b;
}

let result = sum(2, 3);

console.log(result);

// We can use return without a value, That causes the function to exit immediately

function ShowMovie(age=0){
    if(age<18){
        return;
    }

    console.log("Movie");
}

ShowMovie(18);
ShowMovie(17);

// function with empty return or without it returns undefined.

function doNothing(){};
console.log(doNothing());           // undefined

function returnNothing(){return;}
console.log(returnNothing());       // undefined

// Never add a newline between return and the value

function newLineReturn(){
    return      // this is like this return;
    "hello"
}
console.log(newLineReturn());   // undefined

// we can use () to add more lines for return

function moreLineReturn(){
    return (
        "hello"
    )
}

console.log(moreLineReturn());  // hello

// Function naming.
// get -> retrun value
// calc -> calculate something
// create -> create something
// check -> check something and return a boolean
// show -> show something
