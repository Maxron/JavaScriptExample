const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

const beDirs = {
    src: 'es6',
    dest: 'dist'
}

const feDirs = {
    src: 'public/es6',
    dest: 'public/dist'
}

gulp.task('default', ['runESLint', 'buildES5']);
gulp.task('buildES5', ['buildES5_BE', 'buildES5_FE']);

gulp.task('runESLint', function() {
    console.log(`be: ${beDirs.src}`);
    gulp.src([`${beDirs.src}/**/*.js`, `${beDirs.src}/es6/**/*.js`])
        .pipe(eslint())
        .pipe(eslint.format());
})

gulp.task('buildES5_BE', function() {
    gulp.src(`${beDirs.src}/**/*.js`)
        .pipe(babel())
        .pipe(gulp.dest(`${beDirs.dest}/`));
});

gulp.task('buildES5_FE', function() {
    gulp.src(`${feDirs.src}/**/*.js`)
        .pipe(babel())
        .pipe(gulp.dest(`${feDirs.dest}/`));
});