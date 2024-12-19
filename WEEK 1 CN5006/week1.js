/* Example 1 */
console.log("this is my first programme");
console.log("welcome your monthly salary is 2000");

/* Example 2 */
const num1 = 6;
const num2 = 7;
// Add two numbers
const sum1 = num1 + num2;
// Display the sum
console.log("The sum of " + num1 + " and " + num2 + " is: " + sum1);

/* Example 3 */
// Defining Prompt
const ps = require("prompt-sync");
const prompt = ps();

// Program that checks if the number is positive, negative, or zero
// Input from the user
const number = parseInt(prompt("Enter a number: "));
console.log("Number " + number);

// Check if the number is greater than 0
if (number > 0) {
  console.log("The number is positive");
}
// Check if the number is 0
else if (number == 0) {
  console.log("The number is zero");
}
// Check if the number is less than 0
else {
  console.log("The number is negative");
}

/* Main Task */
// Input numbers from the user
const number1 = parseInt(prompt("Enter a number: "));
const number2 = parseInt(prompt("Enter another number: "));

// Perform calculations and display results
const sum = number1 + number2;
console.log("The sum of " + number1 + " and " + number2 + " is: " + sum);

const multiply = number1 * number2;
console.log(
  "The multiplication of " + number1 + " and " + number2 + " is: " + multiply
);

const divide = number1 / number2;
console.log("The division of " + number1 + " and " + number2 + " is: " + divide);

const subtract = number1 - number2;
console.log(
  "The subtraction of " + number1 + " and " + number2 + " is: " + subtract
);
