import minimist from 'minimist';
import defaults from 'defaults';

let options = minimist(process.argv.slice(2));

options = defaults(options, {
    watch: true
});

if ( options.production ) {
    options.watch = false;
}

export default options;