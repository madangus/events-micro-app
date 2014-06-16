define(['can',
		'text!components/tabs.mustache',
		'can/map/setter'], 
function(can, tabsMustache) {
	var TabsViewModel = can.Map.extend({
		panels: [],
		selected: false,
		addPanel: function(panel) {
			var panels = this.attr('panels');
			panels.push(panel);
			panel.attr('selected', false);
			if (panels.attr('length') === 1) {
				this.select(panel);
			}
		},
		removePanel: function(panel) {
			var panels = this.attr('panels');
			var index = panels.indexOf(panel);
			panels.splice(index, 1);
			if (this.attr('selected') === panel) {
				panels.attr('length') ? this.select(panels[0]) : this.attr('selected', false);
			}
		},
		select: function(panel) {
			this.attr('selected', panel);
			this.attr('panels').each(function(panel) {
				panel.attr('selected', false);
			});
			panel.attr('selected',true);
		},
		isSelected: function(panel) {
			return this.attr('selected') === panel;
		}
	});


	can.Component.extend({
		tag: 'tabs',
		scope: TabsViewModel,
		template: tabsMustache
	});
});
