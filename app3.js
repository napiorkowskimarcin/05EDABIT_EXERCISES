//EXERCISE 11
console.log("EXERCISE 11");
console.log(`Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"`);

regex = /7/;

function sevenBoom(arr) {
  if (regex.test(arr)) {
    return "Boom!";
  }
  return "there is no 7 in the array";
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));

//EXERCISE 12
console.log(`A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

Some boomerang examples:

[3, 7, 3], [1, -1, 1], [5, 6, 5]
Create a function that returns the total number of boomerangs in an array.

To illustrate:

[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0`);

function boomerang(arr) {
  let number = 0;
  for (let i in arr) {
    //console.log(arr[i - 2]);
    if (arr[i - 2] === arr[i] && arr[i] !== arr[i - 1]) {
      number++;
    }
  }
  return number;
}
console.log(boomerang([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));
console.log(boomerang([9, 5, 9, 5, 1, 1, 1]));
console.log(boomerang([4, 4, 4, 9, 9, 9, 9]));
console.log(boomerang([5, 6, 6, 7, 6, 3, 9]));

