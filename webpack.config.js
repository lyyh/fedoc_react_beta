var path = require('path');
var webpack = require('webpack')
var config = {
	 entry: {
        main: ["./fe_app/src/entry/main.jsx"],
        vendor: ['react', 'react-dom', 'redux', 'redux-thunk']
    },
   output: {
      path:path.resolve(__dirname, "fe_app/app"),
      filename: '[name].min.js'
      // publicPath:'fe_app/app'
   },
   devServer: {
      inline: true,
      port: 8888
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',    
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css$/,
            loaders: ['style', 'css'],
            include: path.resolve(__dirname, 'fe_app/app'),
         },
         {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {
               limit: 10000
            }
         }
      ]
   },
	 plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'react.min.js'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
            warnings: false
        }
    })
    ]
}

module.exports = config;