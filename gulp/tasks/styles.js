import gulp from 'gulp';
import sass from 'gulp-sass';
import watch from 'gulp-watch';
import util from 'gulp-util';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import livereload from 'gulp-livereload';

import notifier from '../utils/notifier';
import options from '../utils/options';
import { configStyles as config } from '../config';

const output = config.output.path;
const browserSupport = config.browserSupport;

gulp.task('styles', () => {
    // if --watch has been passed as an argument of `gulp build`
    if ( options.watch ) {
        // build the css files at the running time
        gulp.start('sass::dev');

        // relaunch build every time a .scss file is saved
        watch(config.watch, () => {
            gulp.start('sass::dev');
        });
    }

    // if --production has been passed as an argument of `gulp build`
    if ( options.production ) {
        gulp.start('sass::prod');
    }
});

gulp.task('sass::dev', () => {
    return compileDev(config.entry, config.output.filename);
});

gulp.task('sass::prod', () => {
    return compileProd(config.entry, config.output.filename);
});

const compileDev = ( entry, name ) => {
    gulp.src(entry) // select the entry file
        .pipe(sourcemaps.init()) // init the source maps
        .pipe(sass()) // compile sass into css
        .on('error', notifier) // trigger a system notification in case the compilation didn't succeed
        .pipe(postcss([
            autoprefixer({ browsers: browserSupport }) // apply vendors prefixes to css according to the autoprefixer config
        ]))
        .pipe(sourcemaps.write()) // write the sourcemaps
        .pipe(rename(name + '.css')) // rename the final file
        .pipe(gulp.dest(output)) // output the final file into the specified folder
        .pipe(livereload()); // trigger livereload
};

const compileProd = ( entry, name ) => {
    gulp.src(entry) // select the entry file
        .pipe(sass()) // compile sass into css
        .on('error', notifier) // trigger a system notification in case the compilation didn't succeed
        .pipe(postcss([
            autoprefixer({ browsers: browserSupport }), // apply vendors prefixes to css according to the autoprefixer config
        ]))
        .pipe(cleanCss()) // minify
        .pipe(rename(name + '.min.css')) // rename with a .min suffix
        .pipe(gulp.dest(output)); // output the final file into the specified folder
};