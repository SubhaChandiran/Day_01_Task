// 2.Do the below programs in arrow functions.

// b.Convert all the strings to title caps in a string array

// arrow function

const array = ["hello", "world", "javascript", "programming"];

const convertToTitleCase = (arr) => {
  return arr.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
};

const titleCaseArray = convertToTitleCase(array);
console.log(titleCaseArray);
