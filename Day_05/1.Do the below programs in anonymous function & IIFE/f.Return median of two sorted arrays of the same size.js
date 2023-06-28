// 1.Do the below programs in anonymous function & IIFE

// f.Return median of two sorted arrays of the same size.

// Anonymous Function

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

const median = function(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  const sortedArray = mergedArray.sort(function(a, b) {
    return a - b;
  });

  const length = sortedArray.length;
  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
  } else {
    return sortedArray[mid];
  }
};

const result = median(array1, array2);
console.log(result); // Output: 3.5

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// IIFE Function

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

const median = (function(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  const sortedArray = mergedArray.sort(function(a, b) {
    return a - b;
  });

  const length = sortedArray.length;
  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
  } else {
    return sortedArray[mid];
  }
})(array1, array2);

console.log(median); // Output: 3.5
