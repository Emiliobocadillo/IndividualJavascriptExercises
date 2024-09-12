// Get references to DOM elements
const itemSelect = document.getElementById("itemSelect");
const itemList = document.getElementById("itemList");

// Event listener for when a new item is selected
itemSelect.addEventListener("change", () => {
  const selectedItem = itemSelect.value;

  if (selectedItem !== "") {
    const existingItem = document.querySelector(
      `li[data-value="${selectedItem}"]`
    );

    // If the item exists, remove it
    if (existingItem) {
      existingItem.remove();
    } else {
      // Otherwise, add the item to the list
      const newItem = document.createElement("li");
      newItem.setAttribute("data-value", selectedItem);
      newItem.textContent = selectedItem;

      // Add a 'Remove' button or symbol
      const removeButton = document.createElement("span");
      removeButton.textContent = "×"; // Cross symbol for remove
      removeButton.addEventListener("click", () => newItem.remove());

      newItem.appendChild(removeButton);
      itemList.appendChild(newItem);
    }

    // Reset the dropdown
    itemSelect.value = "";
  }
});
