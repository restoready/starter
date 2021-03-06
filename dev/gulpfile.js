'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('dev:sass', function () {
  return gulp.src([

    './scss/_author.scss',
    './scss/_summary.scss',

    // Settings
    './node_modules/inuit-defaults/_settings.defaults.scss',
    './scss/settings/_general.scss',
    './scss/settings/_colors.scss',
    './scss/settings/_fonts.scss',
    './scss/settings/_breakpoints.scss',
    './node_modules/inuit-responsive-settings/_settings.responsive.scss',

    // Tools
    "./node_modules/inuit-functions/_tools.functions.scss",
    "./node_modules/inuit-mixins/_tools.mixins.scss",
    './scss/tools/_mixins.scss',
    "./node_modules/inuit-tools-widths/_tools.widths.scss",
    "./node_modules/inuit-responsive-tools/_tools.responsive.scss",

    // Generic
    "./node_modules/inuit-normalize/_generic.normalize.scss",
    "./node_modules/inuit-reset/_generic.reset.scss",
    "./node_modules/inuit-box-sizing/_generic.box-sizing.scss",

    // Base
    './node_modules/inuit-page/_base.page.scss',
    './scss/base/_fontcustom.scss',
    './scss/base/_document.scss',

    // Vendor
    './scss/vendors/_venobox.scss',

    // Object
    "./node_modules/inuit-layout/_objects.layout.scss",
    './scss/objects/_wrapper.scss',
    './scss/objects/_buttons.scss',
    './scss/objects/_forms.scss',
    './scss/objects/_simple-block.scss',

    // Components
    './scss/components/_button.scss',
    './scss/components/_form.scss',
    './scss/components/_header.scss',
    './scss/components/_nav.scss',
    './scss/components/_footer.scss',
    './scss/components/_banner.scss',
    './scss/components/_custom-page.scss',
    './scss/components/_menu-preview.scss',
    './scss/components/_menu.scss',
    './scss/components/_food.scss',
    './scss/components/_tag.scss',
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

    // Utilities (trumps)
    "./node_modules/inuit-widths/_trumps.widths.scss",
    "./node_modules/inuit-responsive-widths/_trumps.widths-responsive.scss",
    "./scss/utilities/_text-center.scss",

    // Hacks
    "./scss/hacks/_grid.scss"

  ])
  .pipe(concat('application.scss.liquid'))
  .pipe(gulp.dest('../assets/'));
});

gulp.task('dev:js', function () {
  return gulp.src([
    // Vendor
    './node_modules/jquery/dist/jquery.js',
    './js/vendor/venobox.js',

    // Theme
    './js/init.js',
    './js/venobox-override.js',
    './js/map.js',
    './js/nav.js'
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
