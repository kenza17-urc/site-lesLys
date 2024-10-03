const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/App.js',  // Point d'entrée du projet
  output: {
    filename: 'bundle.[contenthash].js',  // Fichier de sortie avec un hash pour le cache
    path: path.resolve(__dirname, 'dist'),  // Dossier de sortie
  },
  mode: 'production',  // Mode de production pour optimiser les performances
  module: {
    rules: [
      {
        test: /\.js$/,  // Pour les fichiers JavaScript
        exclude: /node_modules/,  // Exclure node_modules
        use: {
          loader: 'babel-loader',  // Utiliser Babel pour la compatibilité JS
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],  // Applique style-loader et css-loader pour les fichiers CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      
    //   {
    //     test: /\.(png|jpg|jpeg|gif|svg)$/,
    //     use: [
    //       {
    //         loader: 'file-loader',
    //         options: {
    //           name: '[name].[hash].[ext]',
    //           outputPath: 'images',
    //         },
    //       },
    //       {
    //         loader: 'image-webpack-loader',
    //         options: {
    //           mozjpeg: {
    //             progressive: true,
    //             quality: 65,
    //           },
    //           optipng: {
    //             enabled: true,
    //           },
    //           pngquant: {
    //             quality: [0.65, 0.90],
    //             speed: 4,
    //           },
    //           gifsicle: {
    //             interlaced: false,
    //           },
    //           webp: {
    //             quality: 75,
    //           },
    //         },
    //       },
    //     ],
    //   },
      
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),  // Nettoyer le dossier de build avant chaque compilation
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Utiliser le fichier HTML comme modèle
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',  // Fichier CSS avec un hash pour le cache
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',  // Diviser le code en différents bundles pour optimiser le chargement
    },
  },
};
