// Here is supossed to hot reaload any Main or child changes, 
// BUT I can't get the Main correctly, if I call `require('./Main');`
// it returns the path of the file if I call .Main is undefined oO

// require('./Main');
// console.log(Elm)
// var app = Elm.Main.embed( document.getElementById( 'root' ) );
// Elm.Main.embed(document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
