// Define the Cat class
class Cat {
  // Constructor to initialize the cat's name, color, and breed
  constructor(name, color, breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
  }

  // Method to return the cat's data
  getCatData() {
    return `Cat's Name: ${this.name}, Color: ${this.color}, Breed: ${this.breed}`;
  }

  // Method to change the cat's name
  changeName(newName) {
    this.name = newName;
    console.log(`The cat's new name is: ${this.name}`);
  }
}

// Test the Cat class

// Create a new cat object
const myCat = new Cat("Whiskers", "Grey", "Siamese");

// Get the cat's data and log it
console.log(myCat.getCatData()); // Should log: "Cat's Name: Whiskers, Color: Grey, Breed: Siamese"

// Change the cat's name
myCat.changeName("Mittens"); // Should log: "The cat's new name is: Mittens"

// Get the updated cat data
console.log(myCat.getCatData()); // Should log: "Cat's Name: Mittens, Color: Grey, Breed: Siamese"
