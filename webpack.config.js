const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "index.html",
    // }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      // {
      //   test: /\.html$/i,
      //   loader: "html-loader",
      // },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};