function helloGrunt(number) {
  for (let i = 0; i <= number; i++) {
    console.log("Eu Sou o GRUUUUNT!");
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

console.log(helloGrunt(randomNumber()));
