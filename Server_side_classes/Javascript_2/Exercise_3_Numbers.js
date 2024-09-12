// Function to find the largest of 4 numbers
function findLargest(num1, num2, num3, num4) {
  return Math.max(num1, num2, num3, num4);
}

// Test the findLargest function
const largest = findLargest(10, 45, 32, 25);
console.log(`The largest number is: ${largest}`); 

// Function to check if a number is within a range
function isWithinRange(number, from, to) {
  return number >= from && number <= to;
}

// Test the isWithinRange function
const inRange = isWithinRange(15, 10, 20);
console.log(`Is the number within the range? ${inRange}`); 

const outOfRange = isWithinRange(25, 10, 20);
console.log(`Is the number within the range? ${outOfRange}`); 
