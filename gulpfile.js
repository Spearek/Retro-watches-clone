const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');


function style() {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 3 versions'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
    
}

function watch() {
    browserSync.init({
        server:{
            baseDir: './'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/scripts/**/*.js').on('change',browserSync.reload);
}




exports.style = style;
exports.watch = watch;