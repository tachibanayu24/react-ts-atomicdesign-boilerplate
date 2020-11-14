const path = require("path");

// TODO: webpack5でstorybookをビルドすると、以下のプラグインとの依存関係でエラーが出る
// 問題が修正されたら、以下をインストールする
// https://github.com/storybookjs/storybook/issues/9216
// "html-webpack-plugin": "^4.5.0",
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
      "@rtab/images": path.resolve(__dirname, "src/images"),
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
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "babel-plugin-styled-components",
          ],
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
    ],
  },
};
