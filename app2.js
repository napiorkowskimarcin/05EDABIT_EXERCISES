//GENERAL NOTE: RUNNED WITH NODEMON - NOT ATTACHED TO INDEX.HTML
//EXERCISE 6
console.log("EXERCISE 6");
console.log(`Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
`);

function countTrue(arr) {
  return arr.filter((item) => item).length;
}

console.log("For: countTrue([true, false, false, true, false])");
console.log(countTrue([true, false, false, true, false]));
console.log("For: ([false, false, false, false])");
console.log(countTrue([false, false, false, false]));
console.log("For:([])");
console.log(countTrue([false, false, false, false]));

//EXERCISE 7
console.log("EXERCISE 7");
console.log(`Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

An attribute called fullname which returns the first and last names.
A attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
Remember to allow the attributes fname and lname to be accessed individually as well.

a1 = new Name("john", "SMITH")
a1.fname ➞ "John"

a1.lname ➞ "Smith"

a1.fullname ➞ "John Smith"

a1.initials ➞ "J.S"`);

class Name {
  constructor(fname, lname) {
    this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
    this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();
  }
  fullname() {
    return console.log(this.fname + " " + this.lname);
  }
  initials() {
    return console.log(this.fname[0] + "." + this.lname[0]);
  }
}

const a1 = new Name("john", "SMITH");
console.log(a1.fname);
console.log(a1.lname);
console.log(a1.fullname());
console.log(a1.initials());

//EXERCISE 7
console.log("EXERCISE 7");
console.log(
  `Write a function that returns an anonymous function, 
  which transforms its input by adding a particular suffix at the end.
  add_ly = add_suffix("ly")

  add_ly("hopeless") ➞ "hopelessly"
  add_ly("total") ➞"totally"

  add_less = add_suffix("less")

  add_less("fear") ➞ "fearless"
  add_less("ruth") ➞ "ruthless"`
);

function add_suffix(word) {
  return (input) => input + word;
}
add_ly = add_suffix("ly");
console.log(add_ly("total"));
console.log(add_ly("hopeless"));

add_less = add_suffix("less");
console.log(add_less("fear"));
console.log(add_less("ruth"));

//EXERCISE 8
console.log("EXERCISE 8");
console.log(`Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"`);

function calculator(x, sign, y) {
  let a;
  switch (sign) {
    case "+":
      a = x + y;
      break;
    case "*":
      a = x * y;
    case "/":
      if (y === 0) {
        return console.log("can not divide by 0!");
      }
      a = x / y;
  }
  return a;
}
console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(4, "/", 2));
console.log(calculator(4, "/", 0));

//EXERISE 9
console.log("EXERCISE 9");
console.log(`Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

Examples
changeEnough([2, 100, 0, 0], 14.11) ➞ false

changeEnough([0, 0, 20, 5], 0.75) ➞ true

changeEnough([30, 40, 20, 5], 12.55) ➞ true

changeEnough([10, 0, 0, 50], 3.85) ➞ false

changeEnough([1, 0, 5, 219], 19.99) ➞ false`);

function changeEnough(arr, value) {
  let sum = arr[0] * 0.25 + arr[1] * 0.1 + arr[2] * 0.05 + arr[3] * 0.01;
  return value <= sum ? true : false;
}

console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));
console.log(changeEnough([30, 40, 20, 5], 12.55));
console.log(changeEnough([10, 0, 0, 50], 3.85));
console.log(changeEnough([1, 0, 5, 219], 19.99));

//EXERICSE 10
console.log("EXERCISE 10");
console.log(`Create a function that validates whether a number n is exclusively within the bounds of lower and upper. 
Return false if n is not an integer.

Examples
intWithinBounds(3, 1, 9) ➞ true

intWithinBounds(6, 1, 6) ➞ false

intWithinBounds(4.5, 3, 8) ➞ false`);

function intWithinBounds(n, lower, upper) {
  if (Number.isInteger(n)) {
    return n < upper && n > lower ? true : false;
  } else return false;
}
console.log(intWithinBounds(3, 1, 9));
console.log(intWithinBounds(6, 1, 6));
console.log(intWithinBounds(4.5, 3, 8));
