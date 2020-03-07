const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlCriticalPlugin = require("html-critical-webpack-plugin")

module.exports = (env, argv) => {
  return {
    entry: './src/index.js',
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: argv.mode === 'development'
      }),
      new MiniCssExtractPlugin(),
      ...argv.mode === 'production' ? [new HtmlCriticalPlugin({
        base: path.join(path.resolve(__dirname), 'dist/'),
        src: 'index.html',
        dest: 'index.html',
        inline: true,
        minify: true,
      })] : []
    ].filter(Boolean),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      contentBase: './dist',
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          exclude: '/node_modules/',
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
          ],
        },
      ],
    },
  }
};