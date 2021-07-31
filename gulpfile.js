var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Compile Scss
function scss() {
    return gulp.src('./scss/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

// Watch for file updates
function start() {
    browserSync.init({
        proxy: "localhost/boilerplate"
    });

    gulp.watch('./scss/**/*.scss', scss);
    gulp.watch('./*.html').on('change', browserSync.reload);
}


exports.scss = scss;
exports.start = start;