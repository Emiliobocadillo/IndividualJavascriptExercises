const button = document.getElementById("hoverButton");
const message = document.getElementById("message");

button.addEventListener("mouseover", () => {
  message.classList.remove("hidden");
  message.classList.add("visible");
});

button.addEventListener("mouseout", () => {
  message.classList.remove("visible");
  message.classList.add("hidden");
});
