// 2.Do the below programs in arrow functions.

// d.Return all the prime numbers in an array

// arrow function

const array = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const getPrimeNumbers = (arr) => {
  return arr.filter((num) => {
    if (num < 2) {
      return false;
    }
    
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  });
};

const primeNumbersArray = getPrimeNumbers(array);
console.log(primeNumbersArray); // Output: [2, 3, 5, 7]
