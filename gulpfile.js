var gulp = require('gulp');

var concat = require('gulp-concat');

var sass = require('gulp-sass');

gulp.task('concat', function() {
  return gulp.src([
    './node_modules/angular/angular.js',
  	'./node_modules/angular-route/angular-route.min.js',
  	'./app/js/**/*.js'
  	])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

 
gulp.task('sassLib', function () {
  return gulp.src('./node_modules/foundation-apps/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
  return gulp.src('./app/css/sass/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
   gulp.watch(['./app/js/**/*.js','./app/css/scss/**/*.scss'], ['concat', 'sass']);
});

