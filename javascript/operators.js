// Terms:
// operand - is what operators applied to. 5 + 2. 5 and 2 are operands.
// unary - operator has a single operand. -1, +1
// binary - operator has two operands. 2+3, 3-2



// -- Arithmetic Operators --
// Addition             +
// Substraction         -
// Multiplication       *
// Division             /   
// Remainder            %
// Exponentiation       **

// incremet             ++
// Increases a variable by 1

let num1 = 1;
num1++;
console.log(num1);   // 2


// decrement            --
// decreases a variable by 1
let num2 = 1;
num2--;
console.log(num2);  // 0

// They can be placed before or after variable.
// num++ or num-- are postfix form
// ++num or --num are prefix form

// postfix returns old value
// prefix returns new value

let num3 = 10;
let num4 = num3++;
console.log(num4);  // 10

let num5 = 10;
let num6 = ++num5;
console.log(num6);  // 11

// Unary "+" operator converts to number. If it is number it does nothing.
console.log(+"");       // 0
console.log(+true);     // 1
console.log(+false);    // 0
console.log(+"123");    // 123




// -- String operators --

// + operator merges two strings together
let txt1 = "Hello"
let txt2 = " World"
console.log(txt1 + txt2);   // Hello World

// If there is one string and one number operand "+" converts number to string and merges it.
let num = 10;
console.log(txt1+10);   // Hello10

console.log(2+2+"hehe");    // 4hehe

console.log("1"+2+2)        // 122


// -- Assignment operator --

// = is assignment operator. We can chain assignment operator.

let a = b = c = 0;
console.log(a, b, c);

let n = 2;
n = n + 2;
console.log(n);

// We can make this code shorter

let n2 = 2;
n2 += 2
console.log(n2);


let n3 = 3;
n3 *= 3+5   // right part evaluated first, (3+5)*3=24
console.log(n3);    // 24



// -- Comparisons operators --

// All comparisons operators will retrun boolean values.

// Greater than a>b 
// Greater than or equal a>=b

// Less than a<b
// Less than or equal a<=b

// Comparsion of different types
console.log("3" > 2);   // true. "3" becomes 3
console.log("0001" == 1);   // true. "0001" becomes 1
console.log(true == 1);     // true. true becomes 1
console.log(false == 0);    // true. false becomes 0

// A regular equality has a poblem. It cannot differentiate 0 from false.