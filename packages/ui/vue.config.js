const path = require("path");
const glob = require("glob");

const CSS_LOADER_CONFIG = [
  {
    loader: "css-loader",
    options: {
      sourceMap: true,
    },
  },
  {
    loader: "postcss-loader",
    options: {
      plugins: () => [require("autoprefixer")({ grid: false })],
    },
  },
  {
    loader: "sass-loader",
    options: {
      sourceMap: true,
      includePaths: glob
        .sync("packages/*/node_modules")
        .map((d) => path.join(__dirname, d)),
    },
  },
];

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [{ loader: "style-loader" }].concat(CSS_LOADER_CONFIG),
        },
      ],
    },
  },
};
