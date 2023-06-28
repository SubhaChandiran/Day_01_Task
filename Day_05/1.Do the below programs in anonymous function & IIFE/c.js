// 1.Do the below programs in anonymous function & IIFE

// C.Sum of all numbers in an array

// Anonymous Function
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(sum); // Output: 15

// -------------------------------------------------------------------------------

// IIFE Function

const numbers = [1, 2, 3, 4, 5];

const sum = (function () {
  return numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
})();

console.log(sum); // Output: 15
