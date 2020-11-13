const path = require("path");

module.exports = {
  plugins: [],
  module: {
    rules: [
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
  resolve: {
    extensions: [".ts", ".tsx"],
    alias: {
      "@rtab/components": path.resolve(__dirname, "../src/components"),
      "@rtab/images": path.resolve(__dirname, "../src/images"),
    },
  },
  performance: {
    hints: false,
  },
};
