

const zona = document.querySelector(".zona-candado");
const transicion = document.querySelector(".transicion");

const sonido = new Audio("assets/audio/OPEN.mp3");

zona.onclick = function () {

  // reproducir sonido
  sonido.currentTime = 0;
  sonido.play();

  // activar transición
  transicion.classList.add("activa");

  // cambiar de página
  setTimeout(() => {
    window.location.href = "menu.html";
  }, 1000);
};
