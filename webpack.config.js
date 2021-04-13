const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pkg = require("./package.json");
const webpack = require("webpack");

module.exports = (env = {}) => {
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      chunkFilename: "[id].js",
      publicPath: "",
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          loader: "url-loader",
          options: {
            limit: "10000",
            // ?limit=10000&name=img/[name].[ext]
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: __dirname + "/src/index.html",
        filename: "index.html",
        inject: "body",
      }),
    ],
    devServer: {
      port: 3001,
      stats: {
        children: false,
        maxModules: 0, //Set the
      },
    },
  };
};
