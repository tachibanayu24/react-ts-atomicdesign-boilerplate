module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    ["@babel/preset-react"],
  ],
  plugins: [
    "inline-react-svg",
    "babel-plugin-styled-components",
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@rtab/components": "./src/components",
          "@rtab/images": "./src/images",
          "@rtab/utils": "./src/utils",
        },
      },
    ],
  ],
};
