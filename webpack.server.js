const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Informing webpack that a bundle is being built for
  // NodeJs, rather than for a browser
  target: 'node',

  // Telling webpack the root file of our server app
  entry: './src/index.js',

  // Telling webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
