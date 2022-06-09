const hamburg = document.querySelector(".icon");
const menuContainer = document.querySelector(".container");

hamburg.addEventListener("click", (e) => {
  menuContainer.classList.toggle("d-none");
});
