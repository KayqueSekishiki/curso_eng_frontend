const gulp = require("gulp");

function funcaoPadrao(callback) {
  console.log("Executando via gulp");
  callback();
}

function dizOi(callback) {
  console.log("Olá gulp");
  dizTchau();
  callback();
}

function dizTchau() {
  console.log("Tchau gulp");
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
