// 1.Do the below programs in anonymous function & IIFE

// // a. Print odd numbers in an array

// ----------Using an anonymous function to filter odd numbers--------- :
let array = [1,2,3,4,5,6,7,8,9,10];

let findOddNumber = array.filter(function (array) {
    return array % 2 !== 0;
});

// Printing the odd numbers
findOddNumber.forEach(function (array){
    console.log(array);
});



// // --------------Using an IIFE function------------------

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function () {
  // Using an anonymous function to filter odd numbers
  let oddNumbers = numbers.filter(function (number) {
    return number % 2 !== 0;
  });

  // Printing the odd numbers
  oddNumbers.forEach(function (number) {
    console.log(number);
  });
})();
// ===============================END========================================================



