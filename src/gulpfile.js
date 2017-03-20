const gulp = require('gulp')
const template = require('gulp-md-template')

gulp.task('default', function () {
  return gulp.src('./*.html')
    .pipe(template('./partials'))
    .pipe(gulp.dest('../'));
});
