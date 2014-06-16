require.config({
    baseUrl: '/events-canjs/javascripts',
    paths: {
    	'domReady': 'lib/require-domReady',
        'jquery': 'jquery',
        'kickstart': 'kickstart',
        'can': 'lib/canjs-amd/can',
        'text': 'lib/require-text',
        'api': 'lib/event-service'
    },
    shim: {
        'can': ['jquery']
    },
    waitSeconds: 30
});


require(['kickstart',
        'domReady!'], 
function(kickstart) {
	if ( typeof console === 'undefined') {
        this.console = {
            log : function() {}
        };
    }
    
    kickstart.init();
});
