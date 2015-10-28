module.exports = {
  entry: "./src/hello",
  output: {
    path: __dirname + "/dist", publicPath: 'dist/', filename: "bundle.js"
  },
  externals: [{'angular2/angular2': 'var ng'}],
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [{
      test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
    }]
  }
};