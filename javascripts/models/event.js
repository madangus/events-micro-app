define(["can/model"], 
function (Model) {
	return Model.extend({
		findAll: 'GET /services/events',
		findOne: 'GET /services/events/{id}',
		destroy: 'POST /services/events/destroy/{id}',
		create: 'POST /services/events'
	}, {} );
});