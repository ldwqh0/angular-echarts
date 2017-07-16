var path = require('path')
module.exports = {
  entry: {
    "angular-echarts": path.resolve(__dirname, './src/angular-echarts.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name].js",
    libraryTarget: 'umd'
  },
  externals: {
    angular: "angular",
    echarts: "echarts"
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}
