import webpack from 'webpack';
import {getIfUtils} from 'webpack-config-utils';

export default function(env) {
  const {ifDev} = getIfUtils(env);

  return {
    entry: './src/index',
    output: {
      path: './lib',
      filename: '[name]-[hash].js'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: [['es2015', {modules: false}], 'react']
        }
      }]
    }
  };
}
