var gulp = require('gulp');

var concat = require('gulp-concat');

gulp.task('concat', function() {
  return gulp.src([
  	'./node_modules/angular/angular.js',
  	'./app/js/*.js'
  	])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});