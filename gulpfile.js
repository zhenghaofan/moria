var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('less', function () {
	return gulp.src('./*.less')
	.pipe(less())
  .pipe(gulp.dest('./css'))
  .pipe(reload({ stream:true }));
});

gulp.task('serve', ['less'], function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./*.less', ['less']);
  gulp.watch('*.html', reload);

});