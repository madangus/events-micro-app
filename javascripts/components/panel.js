define(['can',
		'text!components/panel.mustache',
		'can/map/setter'], 
function(can, panelMustache) {
	can.Component.extend({
		tag: 'panel',
		template: panelMustache,
		scope: {
			title: '@'
		},
		events: {
			inserted: function() {
				this.element.parent().scope().addPanel( this.scope )
			},
			removed: function() {
				this.element.parent().scope().addPanel( this.scope )
			}
		}
	});
});
