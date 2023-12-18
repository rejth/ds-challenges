// Challenge: Remove Even Integers From an Array
// Given an array of size n, remove all even integers from it. Implement this solution in JavaScript and see if it runs without an error.

// Implement a function removeEven(arr), which takes an array arr in its input and removes all the even elements from a given array.

// Input: An array with random integers.

// Output: An array with only odd integers

// Time complexity: O(n)
function removeEven(arr) {
  return arr.filter((el) => el % 2 !== 0);
}

console.log(removeEven([1, 2, 4, 5, 10, 6, 3]));
