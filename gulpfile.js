var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile:sass', function () {
   gulp.src('app/sass/*.scss', {base: 'app/sass'})
       .pipe(sass())
       .pipe(gulp.dest('app/css/')); 
});

gulp.task('default', ['compile:sass']);
gulp.watch('app/sass/*.scss', ['compile:sass']);