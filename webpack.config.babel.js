/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import webpack from 'webpack';
import {getIfUtils, removeEmpty} from 'webpack-config-utils';
import AssetsPlugin from 'assets-webpack-plugin';
import Visualizer from 'webpack-visualizer-plugin';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import CleanPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default function (env) {
  const {ifDevelopment, ifProduction} = getIfUtils(env);
  const assetsPath = './lib';

  return {
    // devtool: ifDevelopment('eval-source-map', 'source-map'),
    devtool: false,
    entry: {
      example: './src/index',
      vendor: ['react', 'react-dom', 'spectacle']
    },
    output: {
      path: assetsPath,
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: [['es2015', {modules: false}], 'react'],
            plugins: removeEmpty([
              ifProduction('transform-react-remove-prop-types'),
              ifDevelopment('transform-react-jsx-source'),
              'transform-runtime',
              'lodash'
            ]),
            comments: false,
            cacheDirectory: true
          }
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader?limit=8192'
        },
        {
          test: /\.svg$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        },
        {
          test: /\.mustache$/,
          loader: 'mustache-loader'
        }
      ]
    },
    plugins: removeEmpty([
      ifProduction(new CleanPlugin([assetsPath], {root: __dirname})),
      new AssetsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          // NODE_ENV: JSON.stringify(env)
          NODE_ENV: JSON.stringify('production')
        }
      }),
      ifDevelopment(new webpack.NamedModulesPlugin()),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      // ifProduction(new webpack.LoaderOptionsPlugin({
      //   minimize: true,
      //   debug: false
      // })),
      // ifProduction(new webpack.optimize.UglifyJsPlugin({
      //   compress: {
      //     screw_ie8: true,
      //     warnings: false
      //   }
      // })),
      ifProduction(new Visualizer()),
      ifProduction(new LodashModuleReplacementPlugin()),
      new HtmlWebpackPlugin({
        template: 'src/index.mustache'
      })
    ])
  };
}
