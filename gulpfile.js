'use strict';
// ----- BonsaiApp Gulp File --

var gulp          = require('gulp');
var sass          = require('gulp-sass');
var templateCache = require('gulp-angular-templatecache');
var browserSync   = require('browser-sync');

// ----- Reload BrowserSync --
var reload = browserSync.reload;

// ---- Sass Compiling ----------------------------------------------------------------------
gulp.task('sass', function() {
 return gulp.src('app/scss/**/*.scss')       // Location of scss files.
   .pipe(sass().on('error', sass.logError))  // Compile Sass, & log errors in terminal.
   .pipe(gulp.dest('app/css'));              // Put compiled CSS Files in designated folder.
});

// ---- Template Caching --------------------------------------------------------------------
gulp.task('templates', function () {
 return gulp.src('app/templates/**/*.html')  // Location of your main HTML files.
   .pipe(templateCache({standalone: true}))  // Runs template caching.
   .pipe(gulp.dest('app/scripts'));          // Create template.js in designated folder.
});

// ---- BrowserSync Config ------------------------------------------------------------------
gulp.task('connect', [], function () {
  browserSync({
    notify: false,           // Disables "BrowserSync is running" notification
    logPrefix: 'BonsaiApp',  // Name you want displayed in your console log's prefix. 
    server: ["./app"]        // The folder the application is running from.
    // https: true;
	// Run as an https by uncommenting 'https: true'
	// Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.   
  });
  // Watch these files, and folders. 
  // If there are any changes to saved files reload browser. 
  gulp.watch("app/index.html").on('change', reload);
  gulp.watch("app/templates/**/*.html", ['templates', reload]);
  gulp.watch("app/scripts/**/*.js").on('change', reload);
  gulp.watch("app/styles/**/*.css").on('change', reload);
  gulp.watch("app/scss/**/*.scss", ['sass', reload]);
});

//gulp.task('prod', ['vendor', 'build']);
//gulp.task('dev', ['vendor', 'js', 'watch', 'connect']);
//gulp.task('default', ['dev']);

