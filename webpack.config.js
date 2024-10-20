const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    popup: './src/Pages/Popup/popup.jsx',  // Your entry point
    background: './src/background.js',  // Add background entry if using background script
  },
  output: {
    filename: '[name].bundle.js',  // Dynamic filenames for different entry points
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
        { from: 'src/manifest.json', to: 'manifest.json' },
        { from: 'src/assets', to: 'assets' },  // Copy assets like icons
        { from: 'src/Pages/Popup/index.css', to: 'Pages/Popup/index.css' },  // Copy popup CSS
      ],
    }),
  ],
};
