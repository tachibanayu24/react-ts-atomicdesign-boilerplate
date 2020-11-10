const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  favicon: "./src/images/favicon/favicon.ico",
});

module.exports = {
  entry: ["@babel/polyfill", "./src/index.tsx"],
  output: {
    path: path.resolve("dist"),
    filename: "[name]-[hash].js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "@rtab/components": path.resolve(__dirname, "src/components"),
    },
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  plugins: [htmlWebpackPlugin],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader",
            options: {
              formatter: require("eslint/lib/cli-engine/formatters/stylish"),
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          {
            loader: "react-svg-loader",
            options: {
              tsx: true,
            },
          },
        ],
      },
    ],
  },
};
