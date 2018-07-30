const path = require('path');
const nodemon = require('nodemon');
const browsersync = require('browser-sync').create();
const webpack = require('webpack');

const webpackConfig = require(path.join(__dirname, 'webpack.config.js'));
const projectDir = process.env.PWD;

process.chdir(projectDir);

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
  script: path.join(projectDir, process.argv[2]),
});

browsersync.init({
  port: 8080,
  proxy: 'http://localhost:3000',
});

nodemon.on('restart', () => {
  setTimeout(() => {
    browsersync.reload();
  }, 1000);
});

browsersync
  .watch(path.join(projectDir, '/**/*.(pug|css)'))
  .on('change', browsersync.reload);