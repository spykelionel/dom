// Task1: Calculate the square root of a number

// Square of a number = number * number
// x = 2
// sqrt(x) = x

/**
 * Algorithm for calculating the square root of a number
 * 1. Start
 * 2. Input the number (x)
 * 3. Calculate the square root, y
 * 4. Ouput the square root (y)
 * 5. End
 *
 */

// Implementation
const input = document.getElementById("sqrInput");
const output = document.getElementById("output");
const squareBtn = document.getElementById("squareBtn");

squareBtn.addEventListener("click", calculateSqrt);

function calculateSqrt() {
  // NaN
  // Ensure the input is a number
  console.log(typeof input.value);
  if (isNaN(input.value)) {
    output.textContent = "Invalid input. Please enter a number.";
    return;
  } else {
    const x = input.value;
    y = Math.sqrt(x);
    output.textContent = y;
  }
}
