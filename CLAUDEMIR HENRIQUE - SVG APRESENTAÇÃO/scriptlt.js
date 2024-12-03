JavaScript;
const svg = document.getElementById("svg");
const texts = svg.querySelectorAll("text");
let currentIndex = 0;

function showNextText() {
  texts[currentIndex].classList.remove("active"); // Esconde o texto atual
  currentIndex = (currentIndex + 1) % texts.length; // Próximo índice
  texts[currentIndex].classList.add("active"); // Mostra o próximo texto
}

// Chama a função inicial para mostrar o primeiro texto
showNextText();

// Chama a função a cada 2 segundos
setInterval(showNextText, 2000);
