import gulp from 'gulp';

gulp.task('build', () => {
    gulp.start('scripts');
    gulp.start('styles');
});