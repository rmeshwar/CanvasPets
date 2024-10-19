const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    popup: './src/Pages/Popup/popup.jsx',  // React component entry point
  },
  output: {
    filename: '[name].bundle.js',  // Outputs popup.bundle.js
    path: path.resolve(__dirname, 'build'),  // Outputs files to /build directory
    clean: true,  // Clean the build folder before each build
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Transpile JSX and JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']  // Ensure React is being transpiled
          },
        },
      },
      {
        test: /\.css$/,  // Handles CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Support both .js and .jsx extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/Pages/Popup/index.html',  // Source HTML file
      filename: 'Pages/Popup/index.html',  // Output in the build directory
      chunks: ['popup'],  // Only include the popup bundle
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/manifest.json', to: 'manifest.json' },  // Copy manifest.json to the build directory
        { from: 'src/assets', to: 'assets' },  // Copy all assets to the /assets folder in build
        { from: 'src/Pages/Popup/index.css', to: 'Pages/Popup/index.css' }, // Copy index.css
      ],
    }),
  ],
};
