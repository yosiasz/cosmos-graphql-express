const path = require('path');

module.exports = {
  mode: "development",
  target: 'node',
  entry: './server.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    dgram: 'empty',
    child_process: 'empty'
  }  
};