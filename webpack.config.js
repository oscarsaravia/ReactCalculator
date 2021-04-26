/* eslint-disable linebreak-style */
module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jsx)$/,
        use: ['eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      'node_modules',
    ],
  },
  devServer: {
    contentBase: './dist',
  },
}
