// Constantes
const claridadBtn = document.getElementById("claridad");
const navLinks = document.querySelectorAll("nav a"); // Selecciona todos los enlaces dentro de "nav"
const header = document.getElementById("header");



// Event listeners
colorPagina.addEventListener("input", () => {
  if (colorPagina.value === "0") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    navLinks.forEach((link) => {
      link.style.color = "rgb(66, 66, 66)";
    });
    header.classList.add("sombraHeader");
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    navLinks.forEach((link) => {
      link.style.color = "pink";
    });
    header.classList.remove("sombraHeader");
    document.body.style.mozBoxShadow = "none";
    document.body.style.boxShadow = "none";
  }
});
