/**
 * Factorial Calculator
 * Computes the factorial (n!) of a positive integer using an iterative loop
 * and formats the result into a human-readable summary string.
 */

// 1. Declare a number between 1 and 20 (inclusive)
const num = 5;

/**
 * Calculates the factorial of a given non-negative integer.
 * Example: factorialCalculator(5) -> 1 * 2 * 3 * 4 * 5 = 120
 *
 * HARD STEP EXPLANATION (Why `result` starts at 1):
 * Multiplication uses 1 as its identity element (anything multiplied by 1 stays the same).
 * If `result` started at 0, every multiplication inside the loop (`0 * i`) would stay 0.
 *
 * @param {number} number - The integer whose factorial is to be calculated.
 * @returns {number} The factorial of the input number.
 */
function factorialCalculator(number) {
  let result = 1;

  // Loop from 1 up to `number` (inclusive) using `<=`
  for (let i = 1; i <= number; i++) {
    result *= i; // Shorthand for: result = result * i
  }

  return result;
}

// 2. Call the function with `num` and store the returned factorial
const factorial = factorialCalculator(num);

// 3. Format the output message using a template literal
const resultMsg = `Factorial of ${num} is ${factorial}`;

// 4. Log the final message to the console
console.log(resultMsg);
// Expected Output (when num = 5): "Factorial of 5 is 120"
