var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// define tasks here
gulp.task('default',['build']);

gulp.task('build', function(){
  // run tasks here
  // set up watch handlers here
  return gulp.src('scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    files: 'css/**',
    // server: {
    //   baseDir: "./"
    // },
  })
});

gulp.task('watch', ['browserSync', 'build'], function (){
  gulp.watch('scss/**/*.scss', ['build']);
  // Other watchers
});

