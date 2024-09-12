// Get the container element
const numberList = document.getElementById("number-list");

// Loop through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  // Create a new div element for each number
  const numberDiv = document.createElement("div");
  numberDiv.classList.add("number"); // Add the 'number' class to all divs
  numberDiv.textContent = i; // Set the text content to the current number

  // Check if the number is even or odd and apply the appropriate class
  if (i % 2 === 0) {
    numberDiv.classList.add("even"); // Apply 'even' class for even numbers
  } else {
    numberDiv.classList.add("odd"); // Apply 'odd' class for odd numbers
  }

  // Add an event listener to highlight the number when clicked
  numberDiv.addEventListener("click", () => {
    // Remove highlight from all numbers
    document.querySelectorAll(".number").forEach((num) => {
      num.classList.remove("highlight");
    });

    // Add highlight to the clicked number
    numberDiv.classList.add("highlight");
  });

  // Append the new div to the container
  numberList.appendChild(numberDiv);
}
