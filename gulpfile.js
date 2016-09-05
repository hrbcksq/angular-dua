var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sync = require('browser-sync').create();


gulp.task('serve', ['typescript'], function() {
    sync.init({
        server: './'
    });

    gulp.watch('app/*.ts', ['typescript']);
    gulp.watch(['app/*.css', 'app/*.html', 'app/*.js']).on('change', sync.reload);
});

gulp.task('typescript', function() {
    var tsProject = ts.createProject('tsconfig.json');
    return gulp.src('app/*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest('./app'))
});

gulp.task('default', ['serve']);