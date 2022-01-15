module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    path: require('path').resolve(__dirname, './build'),
    filename: 'app.out.webpack.js'
  }
}