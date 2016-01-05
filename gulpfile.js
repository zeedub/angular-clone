// ========================================
// deps
// ========================================
var gulp = require('gulp');
var compass = require('gulp-compass');


// ========================================
// Compass
// ========================================
gulp.task('compass-web', function() {
    return gulp.src('www/sass/**/*.scss')
        .pipe(compass({
            css: 'www/css',
            sass: 'www/sass',
            image: 'www/images'
        }))
        .pipe(gulp.dest('www/css'));
});

// ========================================
// Compass watcher
// ========================================
var watcher = gulp.watch('www/sass/**/*.scss', ['compass-web']);
watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
