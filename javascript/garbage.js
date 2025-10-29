// user has reference to object
let user = {name:"John"};

user = null;    // There is no refrence to object {name:"John"} now. Garbage collector will delete this object.

let user2 = {name:"John"};
let admin = user2;
// Two variables have reference to {name:"John"} object

user2 = null;   // Object lost only one reference but it has still admin so garbage collector won't delete it.



function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});

console.log(family);
