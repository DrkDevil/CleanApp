"use strict";
// ----- BonsaiApp Gulp File -----

// ----- Required Dependecies -----
var gulp          = require("gulp");
var sass          = require("gulp-sass");
var templateCache = require("gulp-angular-templatecache");
var eslint = require("gulp-eslint");
var browserSync   = require("browser-sync");
var friendlyFormatter = require("eslint-friendly-formatter");
var gulpStylelint = require('gulp-stylelint');

// ----- Reload BrowserSync ------
var reload = browserSync.reload;

// ---- Gulp Quick Commands -----------------------------------------------------------------
//gulp.task('prod', ['vendor', 'build']);
gulp.task("dev", ["lint", "view"]);
gulp.task("default", ["dev"]);

// ---- Sass Compiling ----------------------------------------------------------------------
gulp.task("sass", function() {
 return gulp.src("app/scss/**/*.scss")       // Location of scss files.
   .pipe(sass().on("error", sass.logError))  // Compile Sass, & log errors in terminal.
   .pipe(gulp.dest("app/css"));              // Put compiled CSS Files in designated folder.
});

// ---- Template Caching --------------------------------------------------------------------
gulp.task("templates", function () {
 return gulp.src("app/templates/**/*.html")  // Location of your main HTML files.
   .pipe(templateCache({standalone: true}))  // Runs template caching.
   .pipe(gulp.dest("app/scripts"));          // Create template.js in designated folder.
});

// ---- JavaScript Linting (ESlint) ---------------------------------------------------------
gulp.task("lint", function() {
  return gulp.src(["app/scripts/**/*.js","!app/scripts/templates.js"])   // Location of js files you want to lint. Use !file to ignore certain files or folders
    .pipe(eslint(".eslintrc.json"))                                      // Your eslint pipe 
    .pipe(eslint.format(friendlyFormatter));                            // friendlyFormater helps display your errors in terminal in a more legible way. 
});

// ---- BrowserSync Config ------------------------------------------------------------------
gulp.task('view', [], function () {
  browserSync({
    notify: false,           // Disables the "BrowserSync is running" notification
    logPrefix: 'BonsaiApp',  // Name you want displayed in your console log's prefix. (Optional but cool!)
    server: ["./app"]        // The folder the application is running from.
    // https: true;
	// Run as an https by uncommenting 'https: true'
	// Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.   
  });
  // -- Watch these files, and folders. 
  // -- If there are any changes to saved files reload browser. 
  gulp.watch("app/index.html").on('change', reload);
  gulp.watch("app/templates/**/*.html", ['templates', reload]);
  gulp.watch("app/scripts/**/*.js").on('change', reload);
  gulp.watch("app/styles/**/*.css").on('change', reload);
  gulp.watch("app/scss/**/*.scss", ['sass', reload]);
});