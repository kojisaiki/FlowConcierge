import gulp from 'gulp';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import livereload from 'gulp-livereload';
import args from './lib/args';

gulp.task('vendor:css', function() {
  return gulp
    .src('node_modules/bootstrap/dist/css/*.min.css')
    .pipe(gulpif(args.sourcemaps, sourcemaps.init()))
    .pipe(gulpif(args.production, cleanCSS()))
    .pipe(gulpif(args.sourcemaps, sourcemaps.write()))
    .pipe(gulp.dest(`dist/${args.vendor}/vendor/styles`));
});

gulp.task('vendor:js', function() {
  return gulp
    .src([
      'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      'node_modules/jquery/dist/jquery.slim.min.js'
    ])
    .pipe(gulp.dest(`dist/${args.vendor}/vendor/scripts`));
});

gulp.task('vendor', gulp.parallel('vendor:css', 'vendor:js'));
