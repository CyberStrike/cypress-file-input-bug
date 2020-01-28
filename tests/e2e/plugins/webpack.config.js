const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  plugins: [ new VueLoaderPlugin() ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'vue-style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  }
}
