'use strict';
// ----- BonsaiApp - Gulp File ----------------------------------------------------------------
// ----- Required Dependecies -----------------------------------------------------------------
var gulp = require('gulp');
var repl = require('gulp-repl');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');
var templateCache = require('gulp-angular-templatecache');
var friendlyFormatter = require('eslint-friendly-formatter');
var browserSync = require('browser-sync');
var yellowTxt = require('ansi-yellow');
var greenTxt = require('ansi-green');
var redTxt = require('ansi-red');
var cyanTxt = require('ansi-cyan');
var bgGreen = require('ansi-bggreen');
var bgCyan = require('ansi-bgcyan');
var bgRed = require('ansi-bgred');
var UI = require('readline-ui');
var ui = new UI();
var reload = browserSync.reload;
// ---- Simple repl for gulp ------------------------------------------------------------------
gulp.task('BonsaiApp', function(cb) {
  gulp.repl = repl.start(gulp);
});
gulp.task('stop', function(cb) {
  if (gulp.repl) {
    gulp.repl.close();
    console.log(bgRed('BonsaiApp has stopped. You may now press ctrl+c ...'));
  }
  cb();
});
// ---- CLI UI --------------------------------------------------------------------------------
var Welcome = 'Welcome to BonsaiApp: Develop with peace of mind.';
var prompt = 'Press Enter to input a command and run a task.';
var prompt2 = 'Type ? for help.'
var running = 'Run Command ';
console.log(yellowTxt(Welcome));
console.log(bgCyan(prompt));
ui.render(bgGreen(prompt2));
console.log(' ');
ui.on('keypress', function() {
  ui.render(greenTxt(ui.rl.line));
});
ui.on('line', function(answer) {
  ui.render(yellowTxt(running) + greenTxt(answer));
});
gulp.task('?', function() {
  console.log(cyanTxt(  '-------------------------------------------------------'));
  console.log(yellowTxt('-  BonsaiApp: CLI Command List                        -'));
  console.log(cyanTxt(  '-------------------------------------------------------'));
  console.log(yellowTxt('-  Lint: Run ESLint for dealing w/ javascript errors  -'));
  console.log(yellowTxt('-  Sass: Run SaSS to compile & create your app.css    -'));
  console.log(yellowTxt('-  Stop: End BonsaiApp CLI & ctrl+c to stop your app  -'));
  console.log(cyanTxt(  '-------------------------------------------------------'));
  console.log(' ');
});
// ---- JavaScript Linting (ESlint) -----------------------------------------------------------
gulp.task('lint', function() {
  return gulp.src(['app/scripts/**/*.js',      // Location of js files you want to lint.
      '!app/scripts/templates.js'              // Use !foldername/filename to ignore files.
    ])
    .pipe(eslint('.eslintrc.json'))            // Your eslint pipe (config file)
    .pipe(eslint.format(friendlyFormatter));   // A better way to dispay errors.
});
// ---- Sass Compiling ------------------------------------------------------------------------
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')        // Location of scss files.
    .pipe(sass().on('error', sass.logError))   // Compile Sass, & log errors in terminal.
    .pipe(gulp.dest('app/css/'));             // Put compiled CSS Files in designated folder.
});
// ---- Template Caching ----------------------------------------------------------------------
gulp.task('templates', function() {
  return gulp.src('app/templates/**/*.html')   // Location of your main HTML files.
    .pipe(templateCache({                      // Run template caching.
      standalone: true
    }))
    .pipe(gulp.dest('app/scripts'));           // Create template.js in designated folder.
});
// ---- BrowserSync Config --------------------------------------------------------------------
gulp.task('view', [], function() {
  browserSync({
    notify: false,             // Enable or Disables the 'BrowserSync is running' notification
    logPrefix: 'BonsaiApp',    // Name you want displayed in your console log's prefix.
    server: ['./app']          // The folder the application is running from.
    // https: true;
    // Run as an https by uncommenting 'https: true'
    //
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    //
  })
  // -- Watch these files, and folders.
  // -- If there are any changes to saved files reload browser.
  gulp.watch('app/index.html').on('change', reload);
  gulp.watch('app/templates/**/*.html', ['templates', reload]);
  gulp.watch('app/scss/**/*.scss', ['sass', reload]);
  gulp.watch('app/scripts/**/*.js').on('change', reload);
  gulp.watch('app/styles/**/*.css').on('change', reload);
});
// ---- Gulp Quick Commands -------------------------------------------------------------------
// gulp.task('prod', ['lint', 'build', 'view']);      // *Build not Available ATM
gulp.task('dev', ['lint', 'view']);                   //  Gulp dev
gulp.task('default', ['BonsaiApp', 'dev']);           //  Gulp default
