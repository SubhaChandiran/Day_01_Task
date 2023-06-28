// 1.Do the below programs in anonymous function & IIFE

// d.Return all the prime numbers in an array

// Anonymous Function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = numbers.filter(function (number) {
  if (number < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
});

console.log(primeNumbers); // Output: [2, 3, 5, 7]

// --------------------------------------------------------------------

// IIFE Function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = (function () {
  return numbers.filter(function (number) {
    if (number < 2) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  });
})();

console.log(primeNumbers); // Output: [2, 3, 5, 7]

