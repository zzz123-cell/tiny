
const gulp = require('gulp')
const babel = require('gulp-babel')
const del = require('del')
var uglify = require('gulp-uglify')

function clean(cb) {
  console.log(111)
  del.sync('lib')
  cb()
}

function build() {
  return gulp.src('src/**/*.js')
  .pipe(
    babel(
      {presets: ['@babel/env']}
    )
  ).pipe(
    uglify({
      mangle: true,
      compress: true
    })
  ).pipe(gulp.dest('lib'))

  
  // return gulp.src('src/**/*.js')
  // .pipe(
  //   babel(
  //     {presets: ['@babel/env']}
  //   )
  // ).pipe(gulp.dest('lib'))
}

gulp.src('src/**/*.js')
  .pipe(
    babel(
      {presets: ['@babel/env']}
    )
  ).pipe(gulp.dest('lib'))

module.exports = gulp.series(clean,build)