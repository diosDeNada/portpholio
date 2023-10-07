// Constantes
const btn = document.getElementById("claroOscuro");
let isClicked = false;
const claridadBtn = document.getElementById("claridad");

// Event listeners

// btn.addEventListener('click', () => {
//   if (isClicked) {
//     btn.innerText = 'Claro';
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black";
//   } else {
//     btn.innerText = 'Oscuro';
//     document.body.style.backgroundColor = "black"
//     document.body.style.color = "white";
//   }
//   isClicked = !isClicked;
// });

claridadBtn.addEventListener("input", () => {
  if(claridad.value === "1") {
    btn.innerText = 'Claro';
     document.body.style.backgroundColor = "white";
     document.body.style.color = "black";
      console.log(claridadBtn.value);
  } else if (claridad.value === "2") {
  btn.innerText = 'Oscuro';
     document.body.style.backgroundColor = "black";
     document.body.style.color = "white";
     console.log(claridadBtn.value);
   } else {
   document.body.style.backgroundColor = "rgb(250, 215, 221)";
     document.body.style.color = "rgb(248, 127, 147)";
      console.log(claridadBtn.value);
   }
  })