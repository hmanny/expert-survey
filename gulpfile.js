'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');

/* gulp.task('sass', function() {
    gulp.src('./expertsurveysolutions-co-uk/_img/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./expertsurveysolutions-co-uk/_img/stylesheets'));
});


gulp.task('sass:watch', function () {
  gulp.watch('./expertsurveysolutions-co-uk/_img/sass/*.scss', ['sass']);
}); */


gulp.task('default', function() {
    console.log('gulp?');
});


 
gulp.task('compass', function() {
  gulp.src('./expertsurveysolutions-co-uk/_img/sass/*.scss')
    .pipe(compass({
      config_file: './expertsurveysolutions-co-uk/_img/config.rb',
      css: 'stylesheets',
      sass: 'sass'
    }))
    .pipe(gulp.dest('app/assets/temp'));
});