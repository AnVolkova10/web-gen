const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const PrettierPlugin = require('prettier-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const paths = require('./paths');

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // ESLint configuration
    new ESLintPlugin({
      files: ['.', 'src', 'config'],
      formatter: 'table',
    }),

    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'GENOSHA | Agencia Creativa |',
      favicon: paths.public + '/favicon.ico',
      template: paths.public + '/index.html', // template file
      filename: 'index.html', // output file
    }),

    // Prettier configuration
    // new PrettierPlugin({
    //     tabWidth: 4,
    //     useTabs: false,
    //     semi: true,
    // }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    targets: {
                      safari: 10,
                    },
                  },
                ],
              ],
              plugins: [
                '@babel/plugin-transform-spread',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-transform-classes',
              ],
            },
          },
        ],
      },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },

      // Fonts and SVGs: Inline files
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },

      {
        test: /\.glsl$/,
        use: ['webpack-glsl-loader'],
      },
    ],
  },

  resolve: {
    // Must be mapped in .eslintrc.json import/resolver
    alias: {
      JS: `${paths.src}/js`,
      HELPERS: `${paths.src}/js/helpers`,
      CONSTS: `${paths.src}/js/consts`,
      COMPONENTS: `${paths.src}/js/components`,
      FONTS: `${paths.src}/assets/fonts`,
      ASSETS: `${paths.src}/assets`,
      IMAGES: `${paths.src}/assets/images`,
      NODE_MODULES: paths.nodeModules,
    },
    extensions: ['.js', '.jsx'],
  },
};
