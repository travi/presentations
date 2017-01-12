/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import webpack from 'webpack';
import {getIfUtils, removeEmpty} from 'webpack-config-utils';

export default function (env) {
  const {ifDev} = getIfUtils(env);

  return {
    devtool: ifDev('eval-source-map', 'source-map'),
    entry: {
      main: './src/index',
      vendor: ['react', 'react-dom']
    },
    output: {
      path: './lib',
      filename: '[name]-[hash].js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', {modules: false}], 'react']
        }
      }]
    },
    plugins: removeEmpty([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env)
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      })
    ])
  };
}
