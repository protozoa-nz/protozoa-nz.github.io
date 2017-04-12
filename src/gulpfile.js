const gulp = require('gulp')
const template = require('gulp-md-template')

gulp.task('default', function () {
  return gulp.src('./*.html')
    .pipe(template('./partials'))
    .pipe(gulp.dest('../'));
});

gulp.task('css', function () {
  var postcss      = require('gulp-postcss')
  var sourcemaps   = require('gulp-sourcemaps')
  var autoprefixer = require('autoprefixer')

  return gulp.src('../build/style.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('..'))
})
