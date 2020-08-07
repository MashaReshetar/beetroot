/* eslint-disable */
const gulp = require("gulp");
const sync = require("browser-sync").create();
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require("gulp-autoprefixer");
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin')
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const replace = require('gulp-replace');
const eslint = require('gulp-eslint');
const prettier = require('gulp-prettier');

sass.compiler = require("node-sass");

const html = () =>
    gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true, }))
        .pipe(gulp.dest('dist'))
        .pipe(sync.stream());

const styles = () =>
    gulp.src("./src/scss/styles.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./dist/css"))
        .pipe(sync.stream());

const scripts = () =>
    gulp.src('./src/js/**/*.js')
        // .pipe(sourcemaps.init())
        // .pipe(eslint())
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        // .pipe(sourcemaps.write('.'))
        // .pipe(terser())
        .pipe(gulp.dest('dist/js'))
        .pipe(sync.stream());

const images = () =>
    gulp.src('src/image/**/*')
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('dist/image'))

const copy = () =>
    gulp.src([
        'src/fonts/**/*',
        'src/libs/**/*',
    ], {
        base: 'src'
    })
        .pipe(gulp.dest('dist'))
        .pipe(sync.stream({
            once: true
        }));

const paths = () =>
    gulp.src('src/*.html')
        .pipe(replace('./scss/styles.scss', './css/styles.css'))
        // .pipe(replace('./js/file.js', './js/file.js'))
        // .pipe(replace('./js/index.js', './js/index.js'))
        .pipe(gulp.dest('dist'));


const server = () => {
    sync.init({
        ui: false,
        notify: false,
        server: {
            baseDir: 'dist'
        }
    });
};

const watch = () => {
    gulp.watch('src/*.html', gulp.series(html, paths));
    gulp.watch('src/scss/**/*', styles);
    gulp.watch('src/js/**/*.js', scripts);
    gulp.watch('src/image/**/*', images)
    // gulp.watch('src/fonts/**/*', copy);
};

const prebuild = gulp.series(gulp.parallel(html, styles, scripts, images, copy), paths);

const dev = gulp.series(
    gulp.parallel(
        html,
        styles,
        scripts,
        images,
        copy,
    ),
    paths,
    gulp.parallel(
        watch,
        server,
    ),
);

module.exports = {
    watch,
    prebuild,
    dev,
}
