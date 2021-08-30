const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );


$("#login").click(function(){
    alert("The paragraph was clicked.");
  });