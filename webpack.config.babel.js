/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import webpack from 'webpack';
import {getIfUtils, removeEmpty} from 'webpack-config-utils';
import AssetsPlugin from 'assets-webpack-plugin';
import Visualizer from 'webpack-visualizer-plugin';
import CleanPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default function (env) {
  const {ifDevelopment, ifProduction} = getIfUtils(env);
  const assetsPath = path.resolve(__dirname, './lib');
  const defaultChunks = ['vendor', 'manifest'];

  return {
    devtool: ifDevelopment('eval-source-map', 'source-map'),
    entry: {
      index: './src',
      'component-library/index': './src/component-library',
      'component-library-dsmjs-july-2016/index': './src/component-library-dsmjs-july-2016',
      'continuous-deployment/index': './src/continuous-deployment',
      'continuous-deployment-dsmjs-june-2017/index': './src/continuous-deployment-dsmjs-june-2017',
      'react-in-isolation/index': './src/react-in-isolation',
      'react-in-isolation-dsmjs-oct-2017/index': './src/react-in-isolation-dsmjs-oct-2017',
      'react-in-isolation-icc-nov-2017/index': './src/react-in-isolation-icc-nov-2017',
      'avoiding-the-monorepo/index': './src/avoiding-the-monorepo',
      'avoiding-the-monorepo-dsmjs-may-2018/index': './src/avoiding-the-monorepo-dsmjs-may-2018',
      vendor: removeEmpty([
        // ifDevelopment('webpack-hot-middleware/client'),
        'react',
        'react-dom',
        'spectacle'
      ])
    },
    output: {
      path: assetsPath,
      filename: ifProduction('[name]-[chunkhash].js', '[name].js'),
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [['es2015', {modules: false}], 'react'],
            plugins: removeEmpty([
              ifProduction('transform-react-remove-prop-types'),
              ifDevelopment('transform-react-jsx-source'),
              'transform-runtime'
            ]),
            comments: false,
            cacheDirectory: true
          }
        },
        {
          test: /\.example$/,
          use: 'raw-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                limit: 8192,
                publicPath: '..//'
              }
            },
            {
              loader: 'img-loader',
              options: {
                progressive: true
              }
            }
          ]
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
      // ifDevelopment(new webpack.HotModuleReplacementPlugin()),
      ifDevelopment(new webpack.NamedModulesPlugin()),
      ifDevelopment(new webpack.NoEmitOnErrorsPlugin()),
      new AssetsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env)
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: defaultChunks
      }),
      ifProduction(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      })),
      ifProduction(new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          screw_ie8: true,
          warnings: false
        }
      })),
      ifProduction(new Visualizer()),
      new HtmlWebpackPlugin({
        chunks: [...defaultChunks, 'index'],
        filename: 'index.html',
        template: 'src/index.mustache',
        ...'production' === env && {gaKey: 'UA-2890413-13'}
      }),
      new HtmlWebpackPlugin({
        chunks: [...defaultChunks, 'continuous-deployment/index'],
        filename: 'continuous-deployment/index.html',
        template: 'src/presentation.mustache',
        title: 'Continuous Deployment',
        ...'production' === env && {gaKey: 'UA-2890413-13'}
      }),
      new HtmlWebpackPlugin({
        chunks: [...defaultChunks, 'continuous-deployment-dsmjs-june-2017/index'],
        filename: 'continuous-deployment-dsmjs-june-2017/index.html',
        template: 'src/presentation.mustache',
        title: 'Continuous Deployment',
        ...'production' === env && {gaKey: 'UA-2890413-13'}
      }),
      new HtmlWebpackPlugin({
        chunks: [...defaultChunks, 'component-library/index'],
        filename: 'component-library/index.html',
        template: 'src/presentation.mustache',
        title: 'Component Library',
        ...'production' === env && {gaKey: 'UA-2890413-13'}
      }),
      new HtmlWebpackPlugin({
        chunks: [...defaultChunks, 'component-library-dsmjs-july-2016/index'],
        filename: 'component-library-dsmjs-july-2016/index.html',
        template: 'src/presentation.mustache',
        title: 'Component Library',
        ...'production' === env && {gaKey: 'UA-2890413-13'}
      }),
      new HtmlWebpackPlugin({
        chunks: [...defaultChunks, 'react-in-isolation/index'],
        filename: 'react-in-isolation/index.html',
        template: 'src/presentation.mustache',
        title: 'React in Isolation',
        ...'production' === env && {gaKey: 'UA-2890413-13'}
      }),
      new HtmlWebpackPlugin({
        chunks: [...defaultChunks, 'react-in-isolation-dsmjs-oct-2017/index'],
        filename: 'react-in-isolation-dsmjs-oct-2017/index.html',
        template: 'src/presentation.mustache',
        title: 'React in Isolation',
        ...'production' === env && {gaKey: 'UA-2890413-13'}
      }),
      new HtmlWebpackPlugin({
        chunks: [...defaultChunks, 'react-in-isolation-icc-nov-2017/index'],
        filename: 'react-in-isolation-icc-nov-2017/index.html',
        template: 'src/presentation.mustache',
        title: 'React in Isolation',
        ...'production' === env && {gaKey: 'UA-2890413-13'}
      }),
      new HtmlWebpackPlugin({
        chunks: [...defaultChunks, 'avoiding-the-monorepo/index'],
        filename: 'avoiding-the-monorepo/index.html',
        template: 'src/presentation.mustache',
        title: 'Avoiding the Monorepo',
        ...'production' === env && {gaKey: 'UA-2890413-13'}
      }),
      new HtmlWebpackPlugin({
        chunks: [...defaultChunks, 'avoiding-the-monorepo-dsmjs-may-2018/index'],
        filename: 'avoiding-the-monorepo-dsmjs-may-2018/index.html',
        template: 'src/presentation.mustache',
        title: 'Avoiding the Monorepo',
        ...'production' === env && {gaKey: 'UA-2890413-13'}
      })
    ])
  };
}
