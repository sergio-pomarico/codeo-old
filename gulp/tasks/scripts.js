/**
 * import dependencies
 */
var browserSync = require('browser-sync').create(),
	concat = require('gulp-concat'),
	gulp = require('gulp'),
	plumber = require('gulp-plumber'), 
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps');

/**
 * concatenate and minify javascripts files
 * @return {Object} [gulp task]
 */
module.exports = function() {
	gulp.task('scripts', function(){
		return gulp.src('./src/vendors/js/**/*.js')
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(concat('vendors.bundle.min.js'))
			.pipe(uglify())
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./assets/js'))
			.pipe(browserSync.stream());
	});
};