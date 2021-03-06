let nums = [1, 2, 3, 4, 5];

// *************************************************************
// ***** METHODS THAT DO NOT MODIFY THE ARRAY ******************
// *************************************************************

// ***** .every(callback) *****
// Checks to see if something is true of all elements in an array.
// Returns boolean
let allAreGreaterThanThree = nums.every(num => num > 3);
// console.log(allAreGreaterThanThree);
let allAreGreaterThanZero = nums.every(num => num > 0);
// console.log(allAreGreaterThanZero);

// ***** .some(callback) *****
// Checks to see if something is true of any elements in an array.
// Returns boolean
let someAreGreaterThanThree = nums.some(num => num > 3);
// console.log(someAreGreaterThanThree);
let someAreGreaterThanFive = nums.some(num => num > 5);
// console.log(someAreGreaterThanFive);

// ***** .map(callback) *****
// Does something to each element of the original array and gives us a new one.
let mapped = nums.map(num => num * 2);
// console.log(mapped);

// ***** .filter(callback) *****
// Gives us a new array that only includes elements that pass a test.
let filtered = nums.filter(num => num > 3);
// console.log(filtered);

// ***** .reduce(callback) *****
// Reduces our array to a single value.
let reduced = nums.reduce((acc, curr) => acc * curr);
// console.log(reduced);
// There is a .reduceRight() method, which goes through the array backwards

// ***** .includes(elem) *****
// Returns boolean
// console.log(nums.includes(5));
// console.log(nums.includes(6));

// ***** .slice(startIndex, ?endIndex);
// Returns a new array that is a subsection of the original
let sliced = nums.slice(1, 4);
// console.log(sliced);

// ***** .join(separator) *****
// Returns a string such that all elements are joined by the separator
let joined = nums.join('-');
// console.log(joined);

// *************************************************************
// ***** METHODS THAT MODIFY THE ARRAY *************************
// *************************************************************

// ***** .pop() *****
// Removes last element, returns that element
// nums.pop();

// ***** .push(elem) *****
// Adds element to end of array, returns new array length
// nums.push(10);

// ***** .shift() *****
// Removes first element, returns that element
// nums.shift();

// ***** .unshift(elem) *****
// Adds element to beginning of array, returns new array length
// nums.unshift(100);

// ***** .sort(?sortingFunction) *****
// Compares elements and sorts them according to return value of sorting function. Returns sorted array.
// nums.sort();
// sorting function negative return value => a comes before b
// sorting function positive return value => b comes before a
// sorting function return value of 0 => do nothing
// nums.sort((a, b) => a - b);
// nums.sort((a, b) => {
//   if (a === 3 && b !== 3) {
//     return 1;
//   } else if (b === 3 && a !== 3) {
//     return -1;
//   } else {
//     return a - b;
//   }
// });

// ***** .reverse() *****
// Does just what it sounds like. Reverses array in place and returns reversed array.
// nums.reverse();

// ***** .splice(start, deleteCount, ?items) *****
// Inserts, deletes, or replaces elements. Returns deleted elements.
// nums.splice(1, 0, 'hello');
// nums.splice(2, 1);
// nums.splice(2, 2, 'go', 'away');

// ***** chaining methods *****
let chained = nums
  .map(x => typeof(x) == 'string' ? x.toUpperCase() : x * 100)
  .slice(1)
  .join('***');
// console.log(chained);

console.log(nums);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// https://github.com/LuosRestil/JSArrayMethodCheatSheet