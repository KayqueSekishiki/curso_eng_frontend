function olaMundo() {
  console.log("Olá Mundo!");
}

function DadoAleatorio(faces = 6) {
  console.log(Math.floor(Math.random() * faces) + 1);
}

olaMundo();
DadoAleatorio();

module.exports = { olaMundo, DadoAleatorio };
