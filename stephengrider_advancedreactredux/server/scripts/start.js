const path = require('path');
const nodemon = require('nodemon');
const browsersync = require('browser-sync').create();
const webpack = require('webpack');

const webpackConfig = require(path.join(process.cwd(), 'webpack.config.js'));

const compiler = webpack(webpackConfig);

compiler.watch(
{
  ignored: /node_modules/,
},
  (errs, stats) => {
    console.log(errs);
  }
);

nodemon({
  script: path.join(process.cwd(), 'dist', 'server.js'),
});

// browsersync.init({
//   port: 8080,
//   proxy: 'http://localhost:3000',
// });

// nodemon.on('restart', () => {
//   setTimeout(() => {
//     browsersync.reload();
//   });
// });