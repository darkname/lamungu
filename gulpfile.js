var gulp = require('gulp');

// Include Our Plugins
//var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');


gulp.task('default', function() {
    return gulp.src('resources/assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});