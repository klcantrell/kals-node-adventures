const path = require('path');
const nodeExternals = require('webpack-node-externals');

const projectDir = process.env.PWD;

const serverConfig = {
  mode: 'development',
  entry: path.join(projectDir, 'src', process.argv[2]),
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  output: {
    path: path.resolve(projectDir),
    filename: 'app.js',
  },
  module: {
    rules: [
      { 
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
            ],
            "plugins": [
              "transform-object-rest-spread",
            ]
          }
        }
      },
    ]
  },
};

module.exports = serverConfig;