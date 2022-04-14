function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

const main = document.querySelector("main");
for (let i = 1; i <= 10; i++) {
  main.innerHTML = document.write(`<div>${i}</div>`);
}
