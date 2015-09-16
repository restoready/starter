'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');

gulp.task('dev:sass', function () {
  return gulp.src([
    './scss/settings/',
    './scss/tools/',
    './scss/generic/',
    './scss/base/',
    './scss/objects/',
    './scss/components/',
    './scss/hacks/'
  ])
  .pipe(concat('application.scss.liquid'))
  .pipe(gulp.dest('../assets/'));
});

gulp.task('watch', function () {
  watch('./scss/**/*.scss', batch(function (events, done) {
    gulp.start('dev:sass', done);
  }));
});

gulp.task('default', ['watch'], function() {});
