const path = require('path');
const webpack = require('webpack');

const webpackConfig = require(path.join(__dirname, 'webpack.config.js'));
const projectDir = process.env.PWD;

process.chdir(projectDir);

webpack(webpackConfig).run();