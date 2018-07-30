const path = require('path');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
  mode: 'development',
  entry: path.join(__dirname, 'index.js'),
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
  },
  module: {
    rules: [
      { 
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
    ]
  },
};

module.exports = serverConfig;