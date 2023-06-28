// 2.Do the below programs in arrow functions.

// e.Return all the palindromes in an array

// arrow function

const array = ["madam", "racecar", "hello", "level", "world", "radar"];

const getPalindromes = (arr) => {
  return arr.filter((str) => {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  });
};

const palindromeArray = getPalindromes(array);
console.log(palindromeArray); // Output: ["madam", "racecar", "level", "radar"]
