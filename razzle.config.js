'use strict';

module.exports = {
  modify(config, { target, dev }, webpack) {
    const appConfig = config; // stay immutable here

    appConfig.module.rules[2].exclude.push(/\.(elm)$/)

    appConfig.resolve.extensions = config.resolve.extensions.concat([
        '.elm'
      ]);
    // appConfig.module.noParse = /.elm$/
    // appConfig.entry = './src/client.js'
    appConfig.module.rules.push(
        {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: require.resolve('elm-webpack-loader'),
        options: {
            verbose: true,
            warn: true
        }
      })

    return appConfig;
  },
};