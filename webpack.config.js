var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: {
    "gyazzac": "./src/gyazzac.coffee"
  },
  output: {
    path: "./",
    filename: "[name].js",
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.coffee$/,
        exclude: /node_modules/,
        loader: "coffee"
      },
      {
        test: /\.jade$/,
        loader: "jade"
      },
      {
        test: /\.less$/,
        loader: "style!css!pleeease"
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: 'file?name=./build/img/[hash].[ext]!img'
      }
    ]
  },
  pleeease: {
    less: true,
    autoprefixer: { browsers: ["last 2 versions"]},
    minifier: true,
    mqpacker: true
  },
  plugins: [
    new WebpackNotifierPlugin({title: 'Webpack'}),
  ],
  devtool: "#source-map",
  devServer: {
    contentBase: "./"
  }
}
