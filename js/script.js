let html = "";
let color = (a, b) => Math.floor(Math.random() * (a - b) + 1) + b;
for (let i = 1; i < 100; i = i + 2) {
  let randomRGB = `rgb( ${color(255, 150)}, ${color(120, 100)}, ${color(
    80,
    40
  )} )`;
  html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}
document.querySelector("main").innerHTML = html;
