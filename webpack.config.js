const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
  entry: {
  //  polyfills: './src/polyfills.js',
    index: './src/index.js'
    //another: './src/another-module.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    //hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Progressive Web Application'
    }),
    new webpack.ProvidePlugin({
      //_: 'lodash'
      join: ['lodash', 'join']
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    })
    //new webpack.NamedModulesPlugin(),
    //new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    //filename: 'bundle.js',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    //publicPath: '/'
  },
  module: {
    rules:[
      {test: /\.css$/, use: ['style-loader','css-loader']},
      //{test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
      //{test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
      //{test: /\.(csv|tsv)$/, use: ['csv-loader']},
      //{test: /\.xml$/, use: ['xml-loader']}
    ]
  }

}
