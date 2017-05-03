module.exports = {
     entry: './src/js/custom/Main.js',
     devtool: 'inline-source-map',
     output: {
         path: __dirname + "/js",
         filename: 'build.js'
     },
      module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }, {
            test: /\.glsl$/,
            loader: 'webpack-glsl-loader'
         }]
     }
 };