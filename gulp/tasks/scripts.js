import gulp from 'gulp';
import concat from 'gulp-concat';
import watch from 'gulp-watch';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import header from 'gulp-header';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import util from 'gulp-util';
import prettyHrtime from 'pretty-hrtime';

import notifier from '../utils/notifier';
import options from '../utils/options';
import { configCustom, configVendors, babelPresets } from '../config';

const vendorsEntries = configVendors.entries;
const vendorsFilename = configVendors.output.filename;
const vendorsOutput = configVendors.output.path;

const customEntries = configCustom.entry;
const customFilename = configCustom.output.filename;
const customOutput = configCustom.output.path;

gulp.task('scripts', () => {
    // if --watch has been passed as an argument of `gulp build`
    if ( options.watch ) {
        gulp.start('vendors::dev'); // build the vendors file at the running time
        // gulp.start('custom::dev'); // build the app file at the running time

        // watch files in vendors folders
        watch(vendorsEntries, () => {
            gulp.start('vendors::dev'); // start task when a change happens in this folder
        });
    } else {
        gulp.start('vendors::prod'); // build the vendors file ready for production
        // gulp.start('custom::prod'); // build the app file ready for production
    }
});

gulp.task('vendors::dev', () => {
    return gulp.src(vendorsEntries) // take all the files in the vendors folders
        .pipe(concat(vendorsFilename + '.js')) // concatenate them in a single file
        .pipe(gulp.dest(vendorsOutput)); // output the concatenated file in the specified directory
});

gulp.task('vendors::prod', () => {
    // remove comments that could be in vendors files
    const uglifyOptions = {
        preserveComments: false
    };

    return gulp.src(vendorsEntries) // take all the files in the vendors folders
        .pipe(concat(vendorsFilename + '.min.js')) // concatenate them in a single file
        .pipe(uglify(uglifyOptions)) // minify the concatenated file
        .pipe(gulp.dest(vendorsOutput)); // output the minified file in the specified directory
});

gulp.task('custom::dev', () => {
    // create a bundler watching your files 
    const bundler = watchify(browserify({
        entries: customEntries,
        debug: true,
        cache: {}, 
        packageCache: {}, 
        fullPaths: false
    })).transform(babelify, babelPresets);

    bundleDev(bundler, customFilename); // build the app file at the running time

    // watch updates in the bundle
    bundler.on('update', () => {
        // simple logs
        util.log(util.colors.yellow('Bundle has changed.'));
        util.log('Running', '\'' + util.colors.cyan('bundling') + '\'...');

        bundleDev(bundler, customFilename); // rebundle the whole thing
    });
});

gulp.task('custom::prod', () => {
    // create a simple bundler without the watching properties
    const bundler = browserify({
        entries: customEntries
    }).transform(babelify, babelPresets);

    bundleProd(bundler, customFilename);
});

const bundleDev = ( bundler, filename ) => {
    const startTime = process.hrtime(); // track when the task has started

    // uglify but keep logs to console and comments
    const uglifyOptions = {
        compress: {
            drop_console: false
        },
        screwIE8: true,
        preserveComments: true
    }; 

    return bundler.bundle()
        .on('error', notifier) // send a notification to the os in case something fails
        .on('end', () => {
            // simple logs
            util.log('Finished', '\'' + util.colors.cyan('bundling') + '\'', 'after', util.colors.magenta(prettyHrtime(process.hrtime(startTime))));
        })
        .pipe(source(filename + '.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true })) // init sourcemaps
        .pipe(uglify(uglifyOptions)) // uglify the bundle
        .pipe(sourcemaps.write()) // write sourcemaps
        .pipe(gulp.dest(customOutput)); // output the bundle in the specified directory
};

const bundleProd = ( bundler, filename ) => {
    const startTime = process.hrtime(); // track when the task has started
    const banner = ['/* A K F N - 2016 */\n console.log("A K F N - 2016");\n',''].join('\n'); // prepare banner for the final file

    // uglify and remove comments and logs to console
    const uglifyOptions = {
        compress: {
            drop_console: true
        },
        screwIE8: true,
        preserveComments: false
    };

    return bundler.bundle()
        .on('error', notifier)
        .on('end', () => {
            util.log('Finished', '\'' + util.colors.cyan('bundling') + '\'', 'after', util.colors.magenta(prettyHrtime(process.hrtime(startTime))));
        })
        .pipe(source(filename + '.min.js')) // rename the file with a .min suffix
        .pipe(buffer())
        .pipe(uglify(uglifyOptions))
        .pipe(header(banner, {})) // add the banner
        .pipe(gulp.dest(customOutput)); // output the bundle in the specified directory
};