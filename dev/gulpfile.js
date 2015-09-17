'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var concat = require('gulp-concat');

gulp.task('dev:sass', function () {
  return gulp.src([
    // Settings
    './scss/settings/_author.scss',
    './scss/settings/_general.scss',
    './scss/settings/_colors.scss',
    './scss/settings/_breakpoints.scss',

    // Tools
    './scss/tools/_mixins.scss',

    // Generic
    './scss/generic/_reset.scss',
    './scss/generic/_box-model.scss',

    // Base
    './scss/base/_basic-styles.scss',
    './scss/base/_typography.scss',
    './scss/base/_lists.scss',
    './scss/base/_forms.scss',
    './scss/base/_fontcustom.scss',

    // Object
    './scss/objects/_images-iframes.scss',
    './scss/objects/_buttons.scss',

    // Components
    './scss/components/_form.scss',
    './scss/components/_layout.scss',
    './scss/components/_header.scss',
    './scss/components/_nav.scss',
    './scss/components/_footer.scss',
    './scss/components/_custom-page.scss',
    './scss/components/_menu.scss',
    './scss/components/_food.scss',
    './scss/components/_back-to-menu.scss',
    './scss/components/_tags.scss',
    './scss/components/_news.scss',
    './scss/components/_gallery.scss',
    './scss/components/_venobox.scss',

    // Pages
    './scss/pages/_home.scss',
    './scss/pages/_contact.scss'

    // Hacks

  ])
  .pipe(concat('application.scss.liquid'))
  .pipe(gulp.dest('../assets/'));
});

gulp.task('watch', function () {
  // SCSS
  watch('./scss/**/*.scss', batch(function (events, done) {
    gulp.start('dev:sass', done);
  }));
});

gulp.task('default', ['watch'], function() {});
