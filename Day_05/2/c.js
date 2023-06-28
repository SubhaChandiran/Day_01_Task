// 2.Do the below programs in arrow functions.

// c.Sum of all numbers in an array

// arrow function

const array = [1, 2, 3, 4, 5];

const sum = (arr) => {
  return arr.reduce((total, num) => total + num, 0);
};

const result = sum(array);
console.log(result); // Output: 15
