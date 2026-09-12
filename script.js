const dropdown = document.querySelector(".dropdown");
const button = dropdown.querySelector(".dropbtn");

button.addEventListener("click", function () {
    dropdown.classList.toggle("dropdown-show");
});