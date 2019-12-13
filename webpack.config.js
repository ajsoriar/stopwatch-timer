const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
            options: {
                includePaths: ["absolute/path/a", "absolute/path/b"]
            }
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Page title!',
      content_title: 'Content title!',
      //template: "./src/index.html",
      //filename: "./index.html"
      template: './src/index.template.ejs'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      //chunkFilename: "[id].css"
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          //keep_fnames: false,
          //mangle: true, 
          compress:false,
        },
      }),
    ],

    // splitChunks: {
    //   cacheGroups: {
    //     styles: {
    //       name: 'css',
    //       test: /\.css$/,
    //       chunks: 'all',
    //       enforce: true,
    //     },
    //   },
    // },

  }
};