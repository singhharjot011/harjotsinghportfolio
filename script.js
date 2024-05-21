const toggleButton = document.querySelector(".toggle");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenu.classList.add("hidden");
toggleButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

