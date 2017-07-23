/**
 * Created by zouaoui on 22/07/2017.
 */
var gulp = require('gulp');
var concat =  require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

//Concaténation des fichiers JS
gulp.task('concat-js', function () {
   return gulp.src('js/*')
       .pipe(concat('main.js'))
       .pipe(gulp.dest('dist/js'));
});

//Concaténation des fichiers CSS
gulp.task('concat-css', function () {
   return gulp.src('css/*')
       .pipe(concat('main.css'))
       .pipe(gulp.dest('dist/css'));
});

//Minification du fichier main.js
gulp.task('minify-js', function () {
   console.log('task: minify-js');
   return gulp.src('dist/js/main.js')
       .pipe(uglify())
       .pipe(rename({ suffix: '.min' }))
       .pipe(gulp.dest('dist/js'));
});

//Minification du fichier main.css
gulp.task('minify-css', function () {
   console.log('task: minify-css');
   return gulp.src('dist/css/main.css')
       .pipe(cleanCss({ compatibility: 'ie8' }))
       .pipe(rename({ suffix: '.min' }))
       .pipe(gulp.dest('dist/css'))
});

//Clean
gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('default', ['clean', 'concat-js', 'concat-css', 'minify-js',  'minify-css']);