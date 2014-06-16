define([
	'can',
	'models/event',
	'text!components/eventLister.mustache',
	'can/map/setter'],
function(can, eventModel, eventListerMustache) {
	var EventViewModel = can.Map.extend({
		init: function() {
			var self = this;

			eventModel.findAll({}, function(events){
				self.attr('events', events);
				self.popped = true;
			});
		},
		destroy: function(event) {
			var id = self.attr('id');
			var msg = 'Are you sure you want to delete the event - ' + self.attr('name'); 
			// TODO: The hokey old window.confirm will not fire from within here,
			// in a real site it would likely be a standard library modal
			eventModel.destroy({'id': id}, {});
		}
	});

	can.Component.extend({
		tag: 'event-lister',
		template: eventListerMustache,
		scope: EventViewModel.extend({
			'data-sort': "@"
		})
	});
	
	return EventViewModel;
})