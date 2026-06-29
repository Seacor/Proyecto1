const sky = document.getElementById("sky");
const card = document.getElementById("card");
const cardImage = document.getElementById("cardImage");

const welcome = document.getElementById("welcome");
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
/* BOTÓN INICIO */
startBtn.addEventListener("click", () => {
  welcome.style.opacity = "0";

  setTimeout(() => {
    welcome.remove();
  }, 800);
});

/* CARTAS */
const cartas = [
  "assets/img/Carta1.png",
  "assets/img/Carta2.png",
  "assets/img/Carta3.png",
  "assets/img/Carta4.png",
  "assets/img/Carta5.png",
  "assets/img/Carta6.png",
  "assets/img/Carta7.png",
  "assets/img/Carta8.png",
  "assets/img/Carta9.png",
  "assets/img/Carta10.png",
];

/* ESTRELLAS */
for (let i = 0; i < 300; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.width = "3px";
  star.style.height = "3px";

  sky.appendChild(star);
}

// ----------------------------
// ESTRELLAS ESPECIALES
// ----------------------------

for (let i = 0; i < cartas.length; i++) {

    const star = document.createElement("div");
    star.classList.add("special-star");

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    const size = Math.random() * 5 + 10;

    star.style.width = size + "px";
    star.style.height = size + "px";

    // Cada estrella queda asociada a una sola carta
    star.dataset.carta = cartas[i];

    star.addEventListener("click", () => {

        cardImage.src = star.dataset.carta;
        card.style.display = "block";

        setTimeout(() => {
            card.style.display = "none";
        }, 3000);

    });

    sky.appendChild(star);

}
backBtn.addEventListener("click", () => {

    window.location.href = "menu.html";

});