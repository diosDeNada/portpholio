// Constantes
const claridadBtn = document.getElementById("claridad");
const navLinks = document.querySelectorAll("nav a"); // Selecciona todos los enlaces dentro de "nav"
const header = document.getElementById("header");
const flechas = document.getElementById("flechas");
const sliderInner = document.getElementById("sliderInner");
const suerteBtn = document.getElementById("suerte");
const futuro = document.getElementById("futuro");
const footer = document.querySelector("footer");
const ocultar = document.querySelector(".hide")



// Event listeners

// modo claro/oscuro
colorPagina.addEventListener("input", () => {
  if (colorPagina.value === "0") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    navLinks.forEach((link) => {
      link.style.color = "rgb(66, 66, 66)";
    });
    header.classList.add("sombraHeader");
    header.classList.remove("neonHeader");
    header.style.backgroundColor = "white";
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
    header.style.backgroundColor = "black";
    futuro.classList.add("neonFuturo");
    footer.style.backgroundColor = "pink";
    footer.style.color = "black";
  }
});

// cambio de flechas en slider
sliderInner.addEventListener("scroll", () => {
  const lastSlide = document.querySelector(".lastSlide");
  if (lastSlide) {
    const lastSlidePosition = lastSlide.getBoundingClientRect();

    if ( // cuando se está en el último slide
      lastSlidePosition.left >= 0 &&
      lastSlidePosition.right <= (sliderInner.clientWidth || window.innerWidth)
    ) {
      flechas.textContent = '← ← ←';
    } else { // cuando NO se está en el último slide
      flechas.textContent = '→ → →';
    }
  }
});

// botón de la suerte
suerteBtn.addEventListener("click", () => {
  let posibilidades = ["A visually appealing website that reflects your brand identity", "A beatiful website that is easy for visitors to navigate", "A search engine optimized (SEO) website", "A website that offers an interactive experience to users", "A website accessible to everyone, and thus reach the largest possible audience"];
  let randomNum = Math.floor(Math.random()* posibilidades.length);
  futuro.innerText = posibilidades[randomNum];
})
