// 1.Do the below programs in anonymous function & IIFE

// b.Convert all the strings to title caps in a string array


// Anonymous function
let strings = ["hello", "world", "javascript"];

// Using an anonymous function to convert strings to title case
let titleCapsArray = strings.map(function (str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
});

// Printing the title caps array
console.log(titleCapsArray);



// ---------------------------------------------------------------

// IIFE function
// Using an IIFE function to convert strings to title case
(function() {
    var strings = ["hello", "world", "javascript"];
    
    for (var i = 0; i < strings.length; i++) {
      strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].substring(1);
    }
    
    console.log(strings);
  })();
  





// ================ Complete ========================













// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array
// Return median of two sorted arrays of the same size.
// Remove duplicates from an array
// Rotate an array by k times
