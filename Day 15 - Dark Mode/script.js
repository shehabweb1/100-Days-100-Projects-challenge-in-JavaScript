const dark = document.getElementById("dark");
const light = document.getElementById("light");
const body = document.querySelector("body");
const text = document.querySelector("p");

dark.addEventListener("click", function () {
  body.style.backgroundColor = "#0d1117";
  text.style.color = "#fff";
  dark.style.display = "none";
  light.style.display = "block";
});

light.addEventListener("click", function () {
  body.style.backgroundColor = "#fff";
  text.style.color = "#0000ff";
  light.style.display = "none";
  dark.style.display = "block";
});