JavaScript;
// Adicione aqui o JavaScript para adicionar interatividade, como rolagem suave entre exemplos, zoom, etc.
// Por exemplo, para adicionar um efeito de zoom ao passar o mouse sobre um SVG:
const examples = document.querySelectorAll(".example svg");

examples.forEach((example) => {
  example.addEventListener("mouseover", () => {
    example.style.transform = "scale(1.2)";
  });

  example.addEventListener("mouseout", () => {
    example.style.transform = "scale(1)";
  });
});
