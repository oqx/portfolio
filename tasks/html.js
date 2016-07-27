var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
// Compile sass into CSS & auto-inject into browsers
gulp.task('html', function() {
  return gulp.src("./app/**/*.html")
    .pipe(gulp.dest("./public"))
    .pipe(reload({stream: true}));
});
