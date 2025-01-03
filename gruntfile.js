const { log } = require("grunt");

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
  });

  grunt.registerTask("olaGrunt", function () {
    const done = this.async();

    setTimeout(function () {
      console.log("ola grunt");
      done();
    }, 4000);
  });

  grunt.registerTask("default", ["olaGrunt"]);
};
