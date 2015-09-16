module.exports = {
  entry: "./webpack-loader.js",
  output: {
    path: __dirname,
    filename: "../assets/app.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
    ]
  }
};
