const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.tsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader", //
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: false,
  },
};
