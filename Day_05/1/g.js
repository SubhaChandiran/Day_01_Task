// 1.Do the below programs in anonymous function & IIFE

// g.Remove duplicates from an array

// Anonymous Function

const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
}(array);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// IIFE Function

const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = (function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
})(array);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
