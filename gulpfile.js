const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
  return src('sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    // .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('css'))
}

function watchTask() {
  watch(['sass/**/*.scss', './HN**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)