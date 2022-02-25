const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/client.js',
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'client.bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              [ '@babel/plugin-transform-react-jsx', {
                'importSource': '@bpmn-io/properties-panel/preact',
                'runtime': 'automatic'
              } ]
            ]
          }
        }
      }
    ]
  }
};