const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email"); // New reference for email input
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError"); // New reference for email error

// List of forbidden words for the profanity filter
const forbiddenWords = ["fuck", "shit", "asshole"]; // Replace with actual profanities

// Function to validate the email ending
function validateCphBusinessEmail(email) {
  return email.endsWith("@cphbusiness.dk");
}

// Function to check for profanity in the input
function containsProfanity(text) {
  return forbiddenWords.some((word) => text.toLowerCase().includes(word));
}

// Handle form submission with validation
userForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Reset previous error messages
  nameError.textContent = "";
  emailError.textContent = "";

  let isValid = true;

  // Check if the name contains profanity
  if (containsProfanity(nameInput.value.trim())) {
    // Display a custom error message for profanity
    nameError.textContent = "Name contains inappropriate language.";
    nameInput.classList.add("invalid");
    isValid = false;
  } else if (nameInput.value.trim() === "") {
    // Display a custom error message for empty name
    nameError.textContent = "Name is required.";
    nameInput.classList.add("invalid");
    isValid = false;
  } else if (nameInput.value.trim().length < 3) {
    // Display a custom error message if name is too short
    nameError.textContent = "Name must be at least 3 characters long.";
    nameInput.classList.add("invalid");
    isValid = false;
  } else {
    // Clear any error messages for name
    nameInput.classList.remove("invalid");
  }

  // Validate the email for @cphbusiness.dk
  if (!validateCphBusinessEmail(emailInput.value.trim())) {
    // Display a custom error message if the email is invalid
    emailError.textContent = "Email must end with @cphbusiness.dk.";
    emailInput.classList.add("invalid");
    isValid = false;
  } else {
    // Clear any error messages for email
    emailInput.classList.remove("invalid");
  }

  // If all validations pass, save to localStorage and redirect
  if (isValid) {
    // Save the name and email to localStorage for future use
    localStorage.setItem("userName", nameInput.value);
    localStorage.setItem("userEmail", emailInput.value);

    // Redirect the user back to the main page (index.html)
    window.location.href = "index.html";
  }
});

// Real-time profanity check while the user types
nameInput.addEventListener("input", () => {
  if (containsProfanity(nameInput.value)) {
    nameError.textContent = "Name contains inappropriate language.";
    nameInput.classList.add("invalid");
  } else {
    nameError.textContent = ""; // Clear the error message if the input is clean
    nameInput.classList.remove("invalid");
  }
});
