// Constantes
const claridadBtn = document.getElementById("claridad");
const navLinks = document.querySelectorAll("nav a"); // Selecciona todos los enlaces dentro de "nav"
const header = document.getElementById("header");
const flechas = document.getElementById("flechas");
const sliderInner = document.getElementById("sliderInner");



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
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    navLinks.forEach((link) => {
      link.style.color = "pink";
    });
    header.classList.remove("sombraHeader");
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

