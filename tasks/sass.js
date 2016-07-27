var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./public"
    });

    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
    gulp.watch("app/**/*.js");
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['> 1%','last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});
