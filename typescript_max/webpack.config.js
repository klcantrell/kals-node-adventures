const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src/index.tsx'),
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
};
