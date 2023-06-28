// 2.Do the below programs in arrow functions.

// a.Print odd numbers in an array

// arrow function

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers(array);
