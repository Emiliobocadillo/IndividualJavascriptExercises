// Define the Car class
class Car {
  // Constructor to initialize the car's make, model, and year
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false; // Initially, the car is not running
  }

  // Method to return car information
  getCarInfo() {
    return `Car Info: ${this.year} ${this.make} ${this.model}`;
  }

  // Method to start the car
  start() {
    this.isRunning = true;
    return `${this.make} ${this.model} has started.`;
  }

  // Method to stop the car
  stop() {
    this.isRunning = false;
    return `${this.make} ${this.model} has stopped.`;
  }
}

// Create two instances of the Car class
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Ford", "Mustang", 2022);

// Test the methods for car1
console.log(car1.getCarInfo()); // Should log: "Car Info: 2020 Toyota Corolla"
console.log(car1.start()); // Should log: "Toyota Corolla has started."
console.log(car1.stop()); // Should log: "Toyota Corolla has stopped."

// Test the methods for car2
console.log(car2.getCarInfo()); // Should log: "Car Info: 2022 Ford Mustang"
console.log(car2.start()); // Should log: "Ford Mustang has started."
console.log(car2.stop()); // Should log: "Ford Mustang has stopped."
