const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true, // Ensures that all routes fallback to index.html
    port: 3001,
    hot: true, // Enables Hot Module Replacement
  },
  output: {
    publicPath: 'auto', // Ensures correct public path for dynamic imports
    clean: true, // Clean the output directory before emitting files
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'microfrontend1',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App', // Exposing the App component for use in the host
      },
      remotes: {
        container: 'container@https://react-micro-frontend-app.vercel.app/remoteEntry.js', // URL to the container app
      },
      shared: {
        react: { singleton: true, eager: true }, // Singleton and eager loading for React
        "react-dom": { singleton: true, eager: true }, // Singleton and eager loading for React DOM
        "react-redux": { singleton: true, eager: true }, // Singleton and eager loading for React Redux
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template for the generated HTML file
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Add necessary extensions for resolving modules
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules from being processed
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for JavaScript and React
            },
          },
        ],
      },
      {
        test: /\.css$/i, // Process CSS files
        use: ['style-loader', 'css-loader'], // Loaders for handling CSS files
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Process image files
        type: 'asset/resource', // Asset modules for handling images
      },
    ],
  },
};
