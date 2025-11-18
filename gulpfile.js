const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");

const paths = {
  scss: "./assets/scss/**/*.scss",
  cssDest: "./assets/css/"
};

function compileSCSS() {
  return gulp
    .src("./assets/scss/app.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded"
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest(paths.cssDest))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.cssDest));
}

function watchFiles() {
  gulp.watch(paths.scss, compileSCSS);
}

exports.default = gulp.series(compileSCSS, watchFiles);
exports.build = gulp.series(compileSCSS);
