// Get references to DOM elements
const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodoButton");
const todoList = document.getElementById("todoList");

// Function to add a new todo
addTodoButton.addEventListener("click", () => {
  const todoText = todoInput.value;

  if (todoText !== "") {
    // Create a new li element
    const newTodo = document.createElement("li");
    newTodo.textContent = todoText;

    // Add event listener to delete the todo when clicked
    newTodo.addEventListener("click", () => {
      newTodo.remove();
    });

    // Append the new todo to the list
    todoList.appendChild(newTodo);

    // Clear the input field
    todoInput.value = "";
  }
});
