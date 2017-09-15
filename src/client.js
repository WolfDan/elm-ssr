var Elm = require('./Main');

// I think is better call this at the end of the body tag, the bundle up and the script down
Elm.Main.embed( document.getElementById( "root" ) );

if (module.hot) {
  module.hot.accept();
  module.hot.accept('./Main', () => {
    const nextElm = require('./Main').Main;
    nextElm.embed( document.getElementById( "root" ) );
  })
}
