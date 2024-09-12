// 1. Create an array with 5 names and print out the first element using console.log
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("First element in the array:", names[0]); // Should log: "First element in the array: Alice"

// 2. Use the indexOf function to get the index of a name that exists in your array
const indexOfCharlie = names.indexOf("Charlie");
console.log("Index of Charlie:", indexOfCharlie); // Should log: "Index of Charlie: 2"

// 3. Try the indexOf function with a name that does not exist in the array
const indexOfUnknown = names.indexOf("Zara");
console.log("Index of Zara (non-existent):", indexOfUnknown); // Should log: -1 (since the name doesn't exist)

// 4. Use the push function to add a new name to the array, then log the updated array
names.push("Frank");
console.log("Updated array after adding a new name:", names); // Should log the array with 6 names

// 5. Use the slice function to create a new array with the first 3 names, then log it
const firstThreeNames = names.slice(0, 3);
console.log("New array with the first 3 names:", firstThreeNames); // Should log: ["Alice", "Bob", "Charlie"]

// 6. Create 2 objects with firstname, lastname, email – values
const person1 = {
  firstname: "John",
  lastname: "Doe",
  email: "john.doe@example.com",
};

const person2 = {
  firstname: "Jane",
  lastname: "Smith",
  email: "jane.smith@example.com",
};

// Add the two objects to a new array
const people = [person1, person2];

// Log the array of objects
console.log("Array of people objects:", people);

// Log the first person's email in a separate log
console.log("First person's email:", people[0].email); // Should log: "john.doe@example.com"
