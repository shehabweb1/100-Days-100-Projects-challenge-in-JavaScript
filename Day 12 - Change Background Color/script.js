const body = document.querySelector("body");
const button = document.querySelector("button");
const color = [
  "red",
  "green",
  "skyblue",
  "purple",
  "orange",
  "pink",
  "brown",
  "salmon"
];

button.addEventListener("click", changeColor);

function changeColor() {
  const indexColor = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[indexColor];
}