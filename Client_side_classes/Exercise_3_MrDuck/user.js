const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

// Handle form submission with validation
userForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Reset previous error messages
  nameError.textContent = "";

  // Check if the name is valid
  if (nameInput.value.trim() === "") {
    // Display a custom error message for empty name
    nameError.textContent = "Name is required.";
    nameInput.classList.add("invalid");
  } else if (nameInput.value.trim().length < 3) {
    // Display a custom error message if name is too short
    nameError.textContent = "Name must be at least 3 characters long.";
    nameInput.classList.add("invalid");
  } else {
    // Clear any error messages and save the user name to LocalStorage
    nameError.textContent = "";
    nameInput.classList.remove("invalid");

    // Save the name to localStorage for future use
    localStorage.setItem("userName", nameInput.value);

    // Redirect the user back to the main page (index.html)
    window.location.href = "index.html";
  }
});
