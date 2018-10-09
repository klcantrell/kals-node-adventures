module.exports = {
  mode: 'development',
  entry: {
    app: './app.ts',
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
};
