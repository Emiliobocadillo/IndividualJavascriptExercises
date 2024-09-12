// Function to print the full name (firstname and lastname)
function printName(firstname, lastname) {
  console.log(`Full Name: ${firstname} ${lastname}`);
}

// Test the printName function
printName("John", "Doe"); // Should log: "Full Name: John Doe"

// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
  return length * width;
}

// Test the calculateRectangleArea function
const area = calculateRectangleArea(5, 3);
console.log(`The area of the rectangle is: ${area}`); // Should log: "The area of the rectangle is: 15"

// Function to calculate distance based on speed and time
function calculateDistance(speed, time) {
  return speed * time;
}

// Test the calculateDistance function
const distance = calculateDistance(60, 2); // Speed = 60 km/h, Time = 2 hours
console.log(`You have travelled ${distance} km`); // Should log: "You have travelled 120 km"

// Now, let's create an object called 'calculator' with the name of the owner
const calculator = {
  owner: "Your Name", // Replace 'Your Name' with your actual name

  // Method to print the full name
  printName: function (firstname, lastname) {
    console.log(`Full Name: ${firstname} ${lastname}`);
  },

  // Method to calculate the area of a rectangle
  calculateRectangleArea: function (length, width) {
    return length * width;
  },

  // Method to calculate distance based on speed and time
  calculateDistance: function (speed, time) {
    return speed * time;
  },
};

// Test the calculator object methods

// Test the printName method from calculator object
calculator.printName("Jane", "Smith"); // Should log: "Full Name: Jane Smith"

// Test the calculateRectangleArea method from calculator object
const rectArea = calculator.calculateRectangleArea(7, 4);
console.log(`The area of the rectangle is: ${rectArea}`); // Should log: "The area of the rectangle is: 28"

// Test the calculateDistance method from calculator object
const travelledDistance = calculator.calculateDistance(80, 3); // Speed = 80 km/h, Time = 3 hours
console.log(`You have travelled ${travelledDistance} km`); // Should log: "You have travelled 240 km"
