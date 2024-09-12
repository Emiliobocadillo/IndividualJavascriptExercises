// Create an array with mixed values
const mixedArray = ["Peter", 7, "Marianne", true, "Helle", 8];

// Loop through the array and log the value along with its type
for (let i = 0; i < mixedArray.length; i++) {
  const value = mixedArray[i];
  const valueType = typeof value; // Use typeof to get the type of the value
  console.log(`${value} is a ${valueType}`);
}
