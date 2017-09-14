'use strict';

module.exports = {
  modify(config, { target, dev }, webpack) {
    const appConfig = config; // stay immutable here

    appConfig.resolve.extensions.push('.elm')
    // appConfig.module.noParse = /.elm$/
    appConfig.module.rules.push({
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/, /\.(elm)$/],
        use: {
          loader: 'elm-webpack-loader',
          options: {
          }
        }
      })

    return appConfig;
  },
};