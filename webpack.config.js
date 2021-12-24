const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  mode: 'production',
  stats: 'none',
  entry: {
    'app': './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'app.js',
    clean: true
  },
  watch: true,
  target: ['web', 'es5'],
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new FriendlyErrorsWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss|\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                parser: 'postcss-scss',
                plugins: [ 'postcss-preset-env' ]
              },
            },
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};