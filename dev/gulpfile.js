'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('dev:sass', function () {
  return gulp.src([
    // Settings
    './node_modules/inuit-defaults/_settings.defaults.scss',
    './scss/settings/_author.scss',
    './scss/settings/_general.scss',
    './scss/settings/_colors.scss',
    './scss/settings/_breakpoints.scss',
    './node_modules/inuit-responsive-settings/_settings.responsive.scss',

    // Tools
    "./node_modules/inuit-functions/_tools.functions.scss",
    "./node_modules/inuit-mixins/_tools.mixins.scss",
    './scss/tools/_mixins.scss',
    "./node_modules/inuit-tools-widths/_tools.widths.scss",
    "./node_modules/inuit-responsive-tools/_tools.responsive.scss",

    // Generic
    './scss/generic/_reset.scss',
    './scss/generic/_box-model.scss',

    // Base
    './scss/base/_document.scss',
    './scss/base/_fontcustom.scss',

    // Vendor
    './scss/vendors/_venobox.scss',

    // Object
    './scss/objects/_wrapper.scss',
    './scss/objects/_buttons.scss',
    './scss/objects/_forms.scss',

    // Components
    './scss/components/_header.scss',
    './scss/components/_nav.scss',
    './scss/components/_footer.scss',
    './scss/components/_banner.scss',
    './scss/components/_custom-page.scss',
    './scss/components/_menu-preview.scss',
    './scss/components/_menu.scss',
    './scss/components/_food.scss',
    './scss/components/_back-to-top.scss',
    './scss/components/_news.scss',
    './scss/components/_gallery.scss',
    './scss/components/_booking.scss',
    './scss/components/_newsletter-form.scss',
    './scss/components/_contact-form.scss',
    './scss/components/_messages.scss',
    './scss/components/_thanks-form.scss',
    './scss/components/_aside-info.scss',
    './scss/components/_opening-info.scss',
    './scss/components/_location.scss',
    './scss/components/_business-view.scss',
    './scss/components/_simple-bloc.scss',

    // Hacks (trumps)
    "./node_modules/inuit-widths/_trumps.widths.scss",
    "./node_modules/inuit-responsive-widths/_trumps.widths-responsive.scss"

  ])
  .pipe(concat('application.scss.liquid'))
  .pipe(gulp.dest('../assets/'));
});

gulp.task('dev:js', function () {
  return gulp.src([
    // Vendor
    './node_modules/jquery/dist/jquery.js',
    './js/vendor/doubletaptogo.min.js',
    './js/vendor/venobox.js',

    // Theme
    './js/init.js',
    './js/map.js'
  ])
  .pipe(sourcemaps.init())
  .pipe(concat('app.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('../assets/'));
});

gulp.task('prod:js', ['dev:js'], function () {
  return gulp.src('../assets/app.js')
  .pipe(uglify())
  .pipe(gulp.dest('../assets/'));
});

gulp.task('watch', function () {
  // SCSS
  watch('./scss/**/*.scss', batch(function (events, done) {
    gulp.start('dev:sass', done);
  }));

  // JS
  watch( './js/**/*.js', batch(function (events, done) {
    gulp.start('dev:js', done);
  }));
});

gulp.task('build', ['dev:sass', 'prod:js'], function() {});
gulp.task('dev', ['dev:sass', 'dev:js'], function() {});
gulp.task('default', ['watch'], function() {});
