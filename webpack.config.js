const path = require('path')
const moduleConfig = require('./webpack-module.config')
const buildPage = require('tram-build-page')

module.exports = {
  entry: './main.js',
  devServer: {
    contentBase: './public',
    hot: true,
    inline: true,
    host: '0.0.0.0'
  },
  mode: process.env.NODE_ENV,
  module: moduleConfig(process.env.NODE_ENV),
  externals: {
    domino: 'domino'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
