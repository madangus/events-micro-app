/**
*	App bootstrapper
*/
define(['can',
		'jquery',
		'domReady!',
		'models/event',
		'fixtures/events',
		'components/tabs',
		'components/panel',
		'components/eventLister'], 
function(can, $) {
	var kickstart = {};
	
	kickstart.init = function() {
		console.log('Please insert disk...');
		$("#events-app").html(can.view('templates/app.mustache', {} ));
	};

	return kickstart;
});


