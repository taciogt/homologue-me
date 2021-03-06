// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');

// create a default task and just log a message
gulp.task('default', function() {
    return gutil.log('Gulp is running!');
});

var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: '/static/index.html',
            fallback: 'catalog.html',
            port: 8001
        }));
});

gulp.task('catalog', function() {
    gulp.src('')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: '/catalog.html',
            fallback: 'catalog.html',
            port: 8002
        }));
});
