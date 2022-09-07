const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  output: {
    filename: '[name]-[contenthash].js',
    path: path.join(__dirname, '/dist'),
    clean: true
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp|mp4|webm)$/i,
        loader: 'file-loader',
        options: {
          name: 'static/[name].[contenthash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './public', to: './public' }]
    }),
    new Dotenv(),
    new webpack.DefinePlugin({
      __REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: ['...', new CssMinimizerPlugin()]
  }
};
