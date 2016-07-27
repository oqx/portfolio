var gulp = require('gulp');
var browserify = require('browserify');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


gulp.task('browserify', function() {
  // Grabs the app.js file
  var sources = browserify({
      entries: './app/app.js',
      debug: true // Build source maps
    })

  // bundles it and creates a file called main.js
  return sources.bundle()
    .pipe(source('main.js'))
  		.pipe(buffer())
  		.pipe(sourcemaps.init({
  			loadMaps: true // Load the sourcemaps browserify already generated
  		}))
    .pipe(ngAnnotate())
    .pipe(uglify({
     mangle: false,
     compress:true,
     output: {
      beautify: false }
     }))
    .pipe(sourcemaps.write('./', {
   			includeContent: true
   		}))
    // .pipe(source('main.js'))
    // saves it the public/js/ directory
    .pipe(gulp.dest('./public/js/'));
});
