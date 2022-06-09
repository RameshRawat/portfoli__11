const hamburg = document.querySelector(".icon");
const menuContainer = document.querySelector(".container");
const iconBars = document.querySelector(".fa-bars");

hamburg.addEventListener("click", (e) => {
  menuContainer.classList.toggle("d-none");
  iconBars.classList.toggle("fa-times");
  iconBars.classList.toggle("fa-bars");
});
