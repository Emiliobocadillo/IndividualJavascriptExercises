// Function to start the number guessing game
function startGuessingGame() {
  // Step 1: Randomly select a number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  let guessCount = 0;
  let userGuess = null;

  // Step 2: Keep asking for a guess until the correct number is guessed
  while (userGuess !== randomNumber) {
    // Step 3: Ask the user for a guess and increment the guess count
    userGuess = parseInt(prompt("Guess a number between 1 and 100:"), 10);
    guessCount++;

    // Check if the guess is lower or higher than the random number
    if (userGuess < randomNumber) {
      alert("Your guess is too low! Try again.");
    } else if (userGuess > randomNumber) {
      alert("Your guess is too high! Try again.");
    } else if (userGuess === randomNumber) {
      // Step 4: Let the user know they guessed correctly and how many guesses they used
      alert(
        `Congratulations! You guessed the correct number ${randomNumber} in ${guessCount} guesses.`
      );
    } else {
      // If the input is not a valid number
      alert("Invalid input. Please enter a number between 1 and 100.");
    }
  }
}

// Start the game when the page is loaded
startGuessingGame();
