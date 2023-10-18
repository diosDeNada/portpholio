// Constantes
const claridadBtn = document.getElementById("claridad");
const navLinks = document.querySelectorAll("nav a"); // Selecciona todos los enlaces dentro de "nav"
const header = document.getElementById("header");
const footer = document.querySelector("footer");


const radioButtonsProjects = document.querySelectorAll('[name= "radioButtonsProjects"]');// Selecciona todos radio button
const divsSlider = document.querySelectorAll('.divSlider');// Selecciona todos los divs del slider


const suerteBtn = document.getElementById("suerte");
const futuro = document.getElementById("futuro");



// Event listeners

// modo claro/oscuro
colorPagina.addEventListener("input", () => {
  if (colorPagina.value === "0") {
    document.body.style.backgroundColor = "rgb(230, 228, 228)";
    document.body.style.color = "black";
    navLinks.forEach((link) => {
      link.style.color = "rgb(66, 66, 66)";
    });
    header.classList.add("sombraHeader");
    header.classList.remove("neonHeader");
    header.classList.remove("darkHeader");
    futuro.classList.remove("neonFuturo");
    futuro.classList.add("sombraHeader");
    footer.style.backgroundColor = "black";
    footer.style.color = "white";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    navLinks.forEach((link) => {
      link.style.color = "pink";
    });
    header.classList.remove("sombraHeader");
    header.classList.add("neonHeader");
    header.classList.add("darkHeader");
    futuro.classList.add("neonFuturo");
    footer.style.backgroundColor = "pink";
    footer.style.color = "black";
  }
});

// movimiento del slider según radio button que se elija
radioButtonsProjects.forEach((radioButton, index) => {
  radioButton.addEventListener('change', () => {
    divsSlider.forEach((div, divIndex) => {
      if (index === divIndex) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    });
  });
});

// botón de la suerte
suerteBtn.addEventListener("click", () => {
  let posibilidades = ["A visually appealing website that reflects your brand identity", "A beatiful website that is easy for visitors to navigate", "A search engine optimized (SEO) website", "A website that offers an interactive experience to users", "A website accessible to everyone, and thus reach the largest possible audience"];
  let randomNum = Math.floor(Math.random()* posibilidades.length);
  futuro.innerText = posibilidades[randomNum];
})
