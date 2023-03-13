console.log('***** Function Practice *****')

const logTestCase = (test, expected, actual) => {
  console.assert(actual === expected, `${test} should return ${expected}\n`, actual);
  console.log(`Test - ${test} should return ${expected}\n`, actual);
};

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
function multiplyThree(a, b, c){
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
function find(value, array){
  for (const elem of array) {
    if (elem === value)
      return true;
  }

  return false;
}

logTestCase(`find(2, [1, 2])`, true, find(2, [1, 2]))
logTestCase(`find(true, [false, false, false])`, false, find(true, [false, false, false]))
logTestCase(`find(null, [])`, false, find(null, []))


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
logTestCase(`isFirstLetter(undefined, '')`, false, isFirstLetter(undefined, ''));


// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
