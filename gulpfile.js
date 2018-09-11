// Archivo gulpfile.json

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    imagemin = require('gulp-imagemin'),
    webserver = require('gulp-webserver'),
    autoprefixer = require('gulp-autoprefixer'),
    fontmin = require('gulp-fontmin');

gulp.task('default', ['uglify', 'scss', 'pug', 'imagemin', 'fontmin', 'webserver', 'watch']);

gulp.task('uglify', function() {
  gulp.src('source/js/materialize.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
  gulp.src('source/js/main.js')
    .pipe(plumber())
    //.pipe(concat('main.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    //.pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('scss', function() {
  gulp.src('source/scss/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 3 versions', '> 5%', 'Firefox ESR']}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('pug', function() {
  gulp.src('source/templates/*.pug')
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('./'));
});

gulp.task('imagemin', function() {
  gulp.src('source/img/**/*.{jpg,jpeg,png,gif,svg}')
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('fontmin', function() {
  gulp.src('source/fonts/**/*.ttf')
    .pipe(fontmin({text: '天地玄黄 宇宙洪荒'}))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('watch', function() {
    gulp.watch('source/js/**/*.js', ['uglify']);
    gulp.watch('source/scss/**/*.scss', ['scss']);
    gulp.watch('source/templates/**/*.pug', ['pug']);
    gulp.watch('source/fonts/**/*.ttf', ['fontmin']);
    gulp.watch('source/img/*.{jpg,jpeg,png,gif,svg}', ['imagemin']);
});
