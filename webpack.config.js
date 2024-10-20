const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: './src/background.js', // Entry for background script
    popup: './src/pages/Popup/popup.jsx', // Entry for popup script
  },
  output: {
    filename: '[name].bundle.js',  // Use [name] to differentiate between popup and background
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Handle .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,  // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Handle JavaScript and React files
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/Pages/Popup/index.html',
      filename: 'Pages/Popup/index.html',  // Output in build/Pages/Popup
      chunks: ['popup'],  // Only include popup's JS
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/manifest.json', to: 'manifest.json' },  // Copy manifest
        { from: 'src/assets', to: 'assets' },  // Copy assets like icons
        { from: 'src/Pages/Popup/index.css', to: 'Pages/Popup/index.css' },  // Copy popup CSS
      ],
    }),
  ],
};
