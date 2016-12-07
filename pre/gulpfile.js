/**
 * Created by yfw on 2016/12/7.
 */
var gulp = require('gulp'),
    gulp_webpack = require('gulp-webpack'),
    gulp_sass = require('gulp-sass');
var webpack_config = require('./webpack.config');
var webpack = require('webpack');

gulp.task('sass', function(){
    gulp.src('src/sass/main.scss')
        .pipe(gulp_sass())
        .pipe(gulp.dest('build/css'));
});

gulp.task('run', function(){
    gulp.src('src/tpl/main.html')
        .pipe(gulp.dest('build/html'));
});