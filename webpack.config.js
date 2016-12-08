var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js/client.js',
  output: { path: './dist', filename: 'client.min.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
        {
            test: /(\.js|\.jsx)$/,
            loader: 'babel',
            include: [path.resolve(__dirname, './node_modules/react-icons/fa'), path.resolve(__dirname, './node_modules/react-icons/go')],
            query: {
                presets: ['es2015', 'react']
            }
        }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })],
    resolve: {
    /*alias: {
        'react': 'react-lite',
        'react-dom': 'react-lite'
    }*/
    }
};