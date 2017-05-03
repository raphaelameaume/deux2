const srcDir = './src';
const distDir = './';

const config = {
    styles: {
        browserSupport: ['last 2 versions'],
        entry: `${srcDir}/sass/application.scss`,
        watch: `${srcDir}/sass/**/*.scss`,
        output: {
            path: `${distDir}/css/`,
            filename: 'build'
        }
    },
    scripts: {
        babel: { // This should match what you got in your .babelrc
            presets: ["es2015"]
        },
        custom: {
            entry: `${srcDir}/js/custom/Main.js`,
            output: {
                path: `${distDir}/js`,
                filename: `build`
            },
            watch: [`${srcDir}/js/custom/**/*.js`, `${srcDir}/js/custom/**/*.glsl`]
        },
        vendors: {
            entries: [
                `${srcDir}/js/vendors/three.min.js`, 
                `${srcDir}/js/vendors/TweenMax.min.js`, 
                `${srcDir}/js/vendors/Wagner.js`,
                `${srcDir}/js/vendors/Wagner.base.js`,
                `${srcDir}/js/vendors/**/*.js`,
            ],
            output: {
                path: `${distDir}/js/`,
                filename: `vendors`
            },
            watch: `${srcDir}/js/vendors/**/*.js`
        }
    }
};

export const configStyles = config.styles;
export const configScripts = config.scripts;
export const configCustom = configScripts.custom;
export const configVendors = configScripts.vendors;
export const babelPresets = configScripts.babel;

export default config;