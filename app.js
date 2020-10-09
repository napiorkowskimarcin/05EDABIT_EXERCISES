//EXERCISE 1:
console.log("EXERCISE 1");
console.log(
  "Create a function that takes an array of non-negative integers and strings and return a new array without the strings"
);

isPositive = (item) => {
  return item > 0;
};

isNumber = (item) => {
  return typeof item === "number";
};

filterArray = (arr) => {
  return arr.filter(isPositive).filter(isNumber);
};

console.log('for array: [1, 2, "aasf", "1", "123", 123]:   ');
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

console.log('for array: [1, "a", "b", 0, 15]:   ');
console.log(filterArray([1, "a", "b", 0, 15]));

console.log('for array: [1, 2, "a", "b"]:   ');
console.log(filterArray([1, 2, "a", "b"]));
console.log(".");
console.log(".");

//EXERCISE 2:
console.log("EXERCISE 2");
console.log(`Create a function that returns true if the first array can be nested inside the second.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.`);

canNest = (arr1, arr2) =>
  Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)
    ? true
    : false;
console.log("For [1, 2, 3, 4], [0, 6]");
console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log("For [3, 1], [4, 0]");
console.log(canNest([3, 1], [4, 0]));
console.log("For[9, 9, 8], [8, 9]");
console.log(canNest([9, 9, 8], [8, 9]));
console.log("For [1, 2, 3, 4], [2, 3]");
console.log(canNest([1, 2, 3, 4], [2, 3]));
console.log(".");
console.log(".");

//EXERCISE 3:
console.log("EXERCISE 3");
console.log(`In this challenge you will be given a relation between two numbers, written as a string.

Here are some example inputs:

"2=2", "8<7", "5=13", "15>4", "110<12"
Write a function that determines if the relation is true or false.`);
console.log(
  "Marcin comment - it should not be advised to use eval accordingly to the developer.mozilla"
);

isTrue = (string) => {
  if (string.includes("=")) {
    // console.log("include");
    string = string.split("");
    // console.log(string);
    // console.log(string.indexOf("="));
    string.splice(string.indexOf("="), 1, "===");
    // console.log(string);
    string = string.join("");
    // console.log(string);
  }
  return eval(string);
};

console.log('for "2=2" :   ');
console.log(isTrue("2=2"));
console.log('for "8<7" :   ');
console.log(isTrue("8<7"));
console.log('for "5=13" :   ');
console.log(isTrue("5=13"));
console.log('for "15>4" :   ');
console.log(isTrue("15>4"));
console.log(".");
console.log(".");

//EXERISE 4:
console.log("EXERCISE 4");
console.log(`Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.
Notes
Input is a positive integer.
Square pyramidal number.`);
let arr = [];
numberSquares = (num) => {
  arr = [...Array(num).keys()];
  let arrMap = arr
    .map((item) => (item + 1) ** 2)
    .reduce((acc, curr) => {
      return acc + curr;
    });
  return arrMap;
};

console.log("for 1: ");
console.log(numberSquares(1));
console.log("for 3: ");
console.log(numberSquares(3));
console.log("for 5: ");
console.log(numberSquares(5));
console.log(".");
console.log(".");

//EXERCISE 5:
console.log("EXERCISE 5");
console.log(`Given an array of women and an array of men, either:

Return "sizes don't match" if the two arrays have different sizes.
If the sizes match, return a array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.`);

zipIt = (arr1, arr2) => {
  let pairedNames = [];
  if (arr1.length == arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      pairedNames.push(`[${arr1[i]},${arr2[i]} ]`);
    }
  } else {
    return console.log(`sizes don't match`);
  }
  return pairedNames;
};
console.log('For ["Elise", "Mary"], ["John", "Rick"]');
console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]));
console.log('For ["Ana", "Amy", "Lisa"], ["Bob", "Josh"]');
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]));
console.log('For["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]');
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]));
