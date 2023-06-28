// 1.Do the below programs in anonymous function & IIFE

// h.Rotate an array by k times

// Anonymous Function

const array = [1, 2, 3, 4, 5];
const k = 2;

const rotateArray = function(arr, k) {
  const rotations = k % arr.length;
  
  return arr.slice(rotations).concat(arr.slice(0, rotations));
}(array, k);

console.log(rotateArray); // Output: [3, 4, 5, 1, 2]

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// IIFE Function
const array = [1, 2, 3, 4, 5];
const k = 2;

const rotateArray = (function(arr, k) {
  const rotations = k % arr.length;
  
  return arr.slice(rotations).concat(arr.slice(0, rotations));
})(array, k);

console.log(rotateArray); // Output: [3, 4, 5, 1, 2]

