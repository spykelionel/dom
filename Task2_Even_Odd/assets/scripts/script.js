// Task2: Check for odd or even number

/**
 * Algorithm for calculating the square root of a number
 * 1. Start
 * 2. Input the number (x)
 * 3. Check for odd or even number
 *  3.1 If x mod = 0
 *     3.1.1 y = "Even"
 *  3.2 else y = "Odd"
 * 4. Ouput the y
 * 5. End
 *
 */

// Implementation
const input = document.getElementById("input");
const output = document.getElementById("output");
const compute = document.getElementById("compute");

compute.addEventListener("click", checkEven);

function checkEven() {
  let y = "";
  if (isNaN(input.value)) {
    output.textContent = "Invalid input. Please enter a number.";
    return;
  } else {
    const x = input.value;
    if (x % 2 === 0) {
      y = "Even";
    } else {
      y = "Odd";
    }
    output.textContent = y;
  }
}
