// Get references to DOM elements
const problemInput = document.getElementById("problemInput");
const sendProblemButton = document.getElementById("sendProblemButton");
const problemDisplay = document.getElementById("problemDisplay");
const duckImage = document.getElementById("duckImage");

// Key for LocalStorage
const STORAGE_KEY = "mrDuckMessages";
const USER_KEY = "userName"; // Key to store the user's name

// Retrieve messages from LocalStorage or initialize an empty array
let messages = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Function to format the date as "DD/MM/YYYY, hh:mm"
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

// Function to display messages in the DOM
function displayMessages() {
  problemDisplay.innerHTML = ""; // Clear the current messages
  messages.forEach((messageObj) => {
    const messageElement = document.createElement("div");
    messageElement.textContent = `Mr. Duck is thinking about: ${messageObj.text}`;

    // Add a title that shows the timestamp when hovered over
    messageElement.setAttribute(
      "title",
      `Submitted on: ${messageObj.timestamp}`
    );

    problemDisplay.appendChild(messageElement);
  });
  problemDisplay.style.display = "block";
}

// Display the saved messages when the page loads
window.addEventListener("load", () => {
  displayMessages();

  // Check if the user's name is stored in LocalStorage
  const userName = localStorage.getItem(USER_KEY);

  if (userName) {
    // Greet the user if their name is stored in LocalStorage
    alert(`Hello, ${userName}! Mr. Duck is very pleased to see you again.`);
    console.log(`Mr. Duck greets ${userName} warmly.`);
  } else {
    // Fallback: If no name is stored, prompt for their name
    const userName = prompt("What is your name?");
    if (userName) {
      localStorage.setItem(USER_KEY, userName);
      alert(`Hello, ${userName}! Mr. Duck is very pleased to meet you!`);
      console.log(`Mr. Duck greets ${userName} warmly.`);
    }
  }
});

// Handle the "Tell Mr. Duck" button click
sendProblemButton.addEventListener("click", () => {
  const problemText = problemInput.value;

  if (problemText !== "") {
    // Get the current timestamp
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);

    // Add the new message along with its timestamp
    const messageObj = {
      text: problemText,
      timestamp: formattedDate,
    };

    messages.push(messageObj);

    // Save the updated array to LocalStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));

    // Display the updated messages
    displayMessages();

    // Clear the input field
    problemInput.value = "";
  }
});

// Easter egg hover effect with a console message
duckImage.addEventListener("mouseenter", () => {
  console.log("Quack! Mr. Duck has transformed!");
});
