var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require("gulp-rename"),
    browserSync = require('browser-sync').create();

gulp.task('browser-sync', ['styles'], function(){
    browserSync.init({
        server: {
            baseDir: 'build'
        },
        notify: false
    });
});

gulp.task('styles', function(){
   return gulp.src('./app/style/**/*/scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({
       sufix: '.min',
       prefix: ''
   }))
    .pipe(autoprefixer({
       browsers: ['last 10 varsions']
   }))
    .pipe(minifycss())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.steram())
});

gulp.task('build', ['styles']);


gulp.task('watch', function(){
    gulp.watch('app/style/**/*.scss', ['styles']);
    gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default',['browserSync', 'watch']);
    
