const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compilaSass() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass().pipe(gulp.dest("./build/styles")));
}

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
exports.sass = compilaSass;
