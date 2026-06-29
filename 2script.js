const backBtn = document.getElementById("backBtn");
const zonas = document.querySelectorAll(".zona");
const transicion = document.querySelector(".transicion");
const sonidoClick = new Audio("assets/audio/click.mp3");
zonas.forEach(zona => {

  zona.addEventListener("click", () => {
 const sonido = new Audio("assets/audio/click.mp3");
    sonido.play();
    const destino = zona.dataset.destino;

    // sonido opcional aquí si quieres

    transicion.classList.add("activa");

    setTimeout(() => {
      window.location.href = destino;
    }, 500);

  });

});
backBtn.addEventListener("click", () => {

    window.location.href = "index.html";

});