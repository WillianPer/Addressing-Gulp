const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    // gulp.src('src/**/*.js')
    return gulp.src('src/**/*.js')
       .pipe(babel({
           coments: false,
           presets: ["env"]
       }))
       .pipe(uglify())
       .on('error', err => console.log(err))
       .pipe(concat('codigo.mim.js'))
       .pipe(gulp.dest('build'))

    // return cb()
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series( transformacaoJS, fim)