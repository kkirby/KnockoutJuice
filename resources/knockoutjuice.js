/**
 * We create a simple Require method. This will be
 * overwritten by a more robust one inside of
 * lib/Helper.js
 */
var Require = function(file){
	document.write('<script type="text/javascript" src="' + file + '"></script>');
}

// We need Joose.
Require('resources/backend/joose.js');
// We need Knockout
Require('resources/backend/knockout.js');
// And lastly, we need jQuery.
Require('resources/backend/jQuery.js');
// Lets get our helper.
Require('lib/Helper.js');