const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const dist = path.join(__dirname, "dist");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: dist,
    publicPath: "/",
    filename: "[name].js",
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 3000,
  },
});
