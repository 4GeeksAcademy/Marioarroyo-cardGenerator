/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  let palos = ["♦", "♥", "♠", "♣"];
  let valor = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "Q", "j", "k"];
  function generarCarta() {
    let randomPalos = palos[Math.floor(Math.random() * palos.length)];
    let randomValor = valor[Math.floor(Math.random() * valor.length)];

    document.querySelector(".top-left .palo").textContent = randomPalos;
    document.querySelector(".bottom-right .palo").textContent = randomPalos;
    document.querySelector(".centro").textContent = randomValor;
    let color = randomPalos === "♦" || randomPalos === "♥" ? "red" : "black";
    document.querySelectorAll(".palo").forEach(p => (p.style.color = color));
    document.querySelector(".centro").style.color = color;
  }
  generarCarta();
};
