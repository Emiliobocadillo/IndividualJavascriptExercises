// Array of book objects with title and author
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Moby Dick", author: "Herman Melville" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];

// Get the <ul> element by its ID
const bookList = document.getElementById("bookList");

// Loop over the array of books
for (let i = 0; i < books.length; i++) {
  const book = books[i];

  // Create a new <li> element
  const li = document.createElement("li");

  // Set the text content of the <li> to include the book's title and author
  li.textContent = `${book.title} by ${book.author}`;

  // Append the <li> to the <ul> element
  bookList.appendChild(li);
}
