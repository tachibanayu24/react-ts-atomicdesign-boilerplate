const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const dist = path.join(__dirname, "../dist");
const environment = process.env.NODE_ENV || "localhost";

module.exports = merge(common, {
  mode: "production",
  output: {
    path: dist,
    filename: environment === "localhost" ? "[name].js" : "[name]-[hash].js",
  },
  target: ["web", "es5"],
  performance: {
    hints: false,
  },
});
