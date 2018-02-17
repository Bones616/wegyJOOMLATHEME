const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const gcmq = require('gulp-group-css-media-queries');
const browserSync = require('browser-sync').create();

gulp.task('build', function(){
   gulp.src('./src/precss/+(styles|styles-ie8).less')
	   .pipe(less())
	   .pipe(gcmq())
	   /*
       .pipe(autoprefixer({
			browsers: ['> 0.01%'],
			cascade: false
		}))
	   .pipe(cleanCSS())*/
       .pipe(gulp.dest('./src/css'))
	   .pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', ['browserSync'], function(){
    gulp.watch('./src/precss/**/*.less', ['build']);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
});