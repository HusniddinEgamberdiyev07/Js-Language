// loops repeats actions




// while loop 

// while(condition){ code } syntax
// if condition true loop continues

let i = 0; 
// this while loop repeats 4 times
// each time it will show i in console and add 1 to i 
// i must be less than 4 it takes for loop to reach 3 so it repeats 4 times
while (i<4) {
    console.log("w", i);
    i++
}




// do while loop

// do{ code }while(code) syntax
// first code will be executed than it checks condition.
let j = 0;
do{
    console.log("d", j);
    j++
}while(j<4);

/// This form of syntax should only be used when 
// you want the body of the loop to execute at least once regardless of the condition being truthy.



// for loop
// for(begin; condition; step){ code } syntax
for(let f=0; f<10; f++){
    console.log("f", f);
}

// begin        let f=0;
// condition    f<10;
// step         f++
// body         console.log("f", f);

// The general loop algorithm works like this:
// Run begin
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → (if condition → run body and run step)

// Begin executes once.
// After each condition test, body and step are executed


// skipping parts in for loop

// begin

let s = 0;   // we have s declared and assigned 
for(; s<10; s++){   // we don't have to put s
    console.log("s", s);
}

// step

let e = 0;
for(;e<5;){     // we removed step 
    console.log("e", e=e+1);    // this adds 1 to e so we don't need step
}

// everything. infinite loop
// for(;;){console.log("Hello")} -> endless loop



// breaking the loop

// Loop ends when its condition becomes false.
// But we can end it maually with break

// let sum = 0;
// while(true){
//     let num = +prompt("Enter num", "");
//     if(!num) break;     // if there is nothing inside num loop will end
//     sum+=num
// }
// console.log(sum)

// continue 
// It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one 

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, then 3, 5, 7, 9
}

// Sometimes we need to break out from multiple nested loops at once.

// for (let i = 0; i < 3; i++) {

//   for (let j = 0; j < 3; j++) {

//     let input = prompt(`Value at coords (${i},${j})`, '');

//     // what if we want to exit from here to Done (below)?
//   }
// }

// alert('Done!');

// A label is an identifier with a colon before a loop:

// labelName: for (...) {
//   ...
// }

// break <labelName>

outer: for (let i2 = 0; i2 < 3; i2++) {

  for (let j2 = 0; j2 < 3; j2++) {

    let input = prompt(`Value at coords (${i2},${j2})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

console.log('Done!');