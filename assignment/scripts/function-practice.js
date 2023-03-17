console.log('***** Function Practice *****');

/**
 * Utility function to compare two arrays
 * @param {any[]} a First array
 * @param {any[]} b Second array
 * @returns {boolean}
 */
function arraysEqual(a, b) {
  if (a.length != b.length)
    return false;

  for (const i in a) {
    if (a[i] !== b[i])
      return false;
  }

  return true;
}

function logTestCase(test, expected, actual, eq = (a, b) => a === b) {
  const css = `
    font-family: 'Courier New';
    font-weight: lighter;
    font-size: 1.2em;
  `;
  const msg = '%c%s%c should return %o:\n%o';
  const msgArgs =
    [css, test, null, expected, actual];
  // Assert before logging so I can find failed tests easily
  console.assert(!eq(actual, expected), msg, ...msgArgs);
  console.log('Test —' + msg, ...msgArgs);
}

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
logTestCase(`helloName('Kobi')`, 'Hello, Kobi!', helloName('Kobi'));


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

logTestCase(`addNumbers(1, 2)`, 3, addNumbers(1, 2));
logTestCase(`addNumbers(-10, 0.5)`, -9.5, addNumbers(-10, 0.5));


// 4. Function to multiply three numbers & return the result
function multiplyThree(a, b, c) {
  return a * b * c;
}

logTestCase(`multiplyThree(0, 2, -1)`, 0, multiplyThree(0, 2, -1));
logTestCase(`multiplyThree(0.5, 2, -4)`, -4, multiplyThree(0.5, 2, -4));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  return number > 0;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length - 1];
}

logTestCase(`getLast([1, 2, 3])`, 3, getLast([1, 2, 3]));
logTestCase(`getLast([])`, undefined, getLast([]));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (const elem of array) {
    if (elem === value)
      return true;
  }

  return false;
}

logTestCase(`find(2, [1, 2])`, true, find(2, [1, 2]));
logTestCase(
  `find(true, [false, false, false])`,
  false,
  find(true, [false, false, false])
);
logTestCase(`find(null, [])`, false, find(null, []));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.length < 1)
    return false;

  return string[0] === letter;
}

logTestCase(`isFirstLetter('a', 'apple')`, true, isFirstLetter('a', 'apple'));
logTestCase(`isFirstLetter('z', 'apple')`, false, isFirstLetter('z', 'apple'));
logTestCase(
  `isFirstLetter(undefined, '')`,
  false,
  isFirstLetter(undefined, '')
);


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for (const elem of array) {
    sum += elem;
  }
  return sum;
}

logTestCase(`sumAll([1, 2, 3])`, 6, sumAll([1, 2, 3]));
logTestCase(`sumAll([])`, 0, sumAll([]));
logTestCase(`sumAll(-10, -100, -1)`, -111, sumAll([-10, -100, -1]));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function filterPositive(array) {
  let positive = [];
  for (const elem of array) {
    if (elem > 0)
      positive.push(elem);
  }
  return positive;
}

logTestCase(`filterPositive([])`, [], filterPositive([]), arraysEqual);
logTestCase(
  `filterPositive([2, 4, 0, -1, 2, -4])`,
  [2, 4, 2],
  filterPositive([2, 4, 0, -1, 2, -4]),
  arraysEqual
);
logTestCase(
  `filterPositive([-1, 0, -2])`,
  [],
  filterPositive([-1, 0, -2]),
  arraysEqual
);


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Problem: Currying vs. Partial Application
// (https://www.codewars.com/kata/53cf7e37e9876c35a60002c9)
/**
 * For a given function, creates a function with the same body
 * but whose arguments can be curried and/or partially applied
 *
 * Note: The this object is overriden by {@link Function.prototype.bind},
 * so any function using the this object will not work
 * @param {function} fn - Function
 * @param  {...any} args - Optional arguments to apply
 */
function curryPartial(fn, ...args) {
  const boundFn = fn.bind(null, ...args);
  if (boundFn.length === 0)
    return boundFn();

  return curryPartial.bind(null, boundFn);
}

logTestCase(
  `curryPartial((a, b, c) => a + b + c, 1)(2, 3)`,
  6,
  curryPartial((a, b, c) => a + b + c, 1)(2, 3)
);

let isFirstLetterA = curryPartial(isFirstLetter)('a');
logTestCase(
  `curryPartial(isFirstLetterA)('apple')`,
  isFirstLetter('a', 'apple'),
  isFirstLetterA('apple')
);
logTestCase(
  `curryPartial(isFirstLetterA)('banana')`,
  isFirstLetter('a', 'banana'),
  isFirstLetterA('banana')
);
