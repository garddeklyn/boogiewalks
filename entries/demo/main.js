let button = document.querySelector(".button");
let colors = ["#91ff1c", "#3ff2ff", "#f9ff3c", "#b120ff"];
let body = document.querySelector("body");

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  body.style.backgroundColor = randColor;
}

button.addEventListener("click", newColor);