/**
 * Created by zouaoui on 22/07/2017.
 */
var gulp = require('gulp');
var concat =  require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var clean = require('gulp-contrib-clean');
var sourcemaps = require('gulp-sourcemaps');

//JAVASCRIPT
gulp.task('javascript', function () {
   return gulp.src('js/*')
       //Concaténation
       .pipe(concat('main.js'))
       .pipe(gulp.dest('dist/js'))
       //Minification
       .pipe(uglify())
       .pipe(rename({ suffix: '.min' }))
       .pipe(gulp.dest('dist/js'));
});

//CSS
gulp.task('css', function () {
   return gulp.src('css/*')
       //Concaténation
       .pipe(concat('main.css'))
       .pipe(gulp.dest('dist/css'))
       //Minification
       .pipe(cleanCss({ compatibility: 'ie8' }))
       .pipe(rename({ suffix: '.min' }))
       .pipe(gulp.dest('dist/css'))
});

//CLEAN
gulp.task('clean', function () {
    gulp.src('dist')
        .pipe(clean());
});

gulp.task('default', ['clean', 'javascript', 'css']);