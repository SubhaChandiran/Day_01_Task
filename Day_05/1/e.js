// 1.Do the below programs in anonymous function & IIFE

// e.Return all the palindromes in an array

// Anonymous Function

const words = ["level", "hello", "radar", "world", "madam"];

const palindromes = words.filter(function (word) {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
});

console.log(palindromes); // Output: ["level", "radar", "madam"]


// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------


// IIFE Function

const words = ["level", "hello", "radar", "world", "madam"];

const palindromes = (function () {
  return words.filter(function (word) {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
  });
})();

console.log(palindromes); // Output: ["level", "radar", "madam"]
