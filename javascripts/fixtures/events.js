define(['can',
		'can/util/fixture'], 
function(can) {
 	var _events =  [{
          "id" : 123,
          "name" : "Sesame Street Live - Elmo Makes Music",
          "date" : "2014-01-15T10:30:00",
          "venue" : {
            "id" : 111,
            "name" : "Broome County Forum",
            "city" : "Binghamton",
            "state" : "NY"
          }
        }, {
          "id" : 124,
          "name" : "2014 Australian Open",
          "date" : "2014-01-15T11:00:00",
          "venue" : {
            "name" : "Rod Laver Arena",
            "city" : "Melbourne"
          }
        }, {
          "id" : 125,
          "name" : "Mac King Comedy Magic Show",
          "date" : "2014-01-15T13:00:00",
          "venue" : {
            "id" : 300,
            "name" : "Harrah's Las Vegas Casino",
            "city" : "Las Vegas",
            "state" : "NV"
          }
        }, {
          "id" : 126,
          "name" : "42nd Street",
          "date" : "2014-01-15T13:30:00",
          "venue" : {
            "id" : 1200,
            "name" : "Paramount Theatre - IL",
            "city" : "Aurora",
            "state" : "IL"
          }
        }, {
          "id" : 127,
          "name" : "Million Dollar Quartet",
          "date" : "2014-01-15T14:00:00",
          "venue" : {
            "id" : 712,
            "name" : "Apollo Theater-IL",
            
            "city" : "Chicago",
            "state" : "IL"
            
          }
        }, {
          "id" : 128,
          "name" : "Twelfth Night",
          "date" : "2014-01-15T14:00:00",
          "venue" : {
            "id" : 1665,
            "name" : "Belasco Theatre",
            "city" : "New York",
            "state" : "NY"
          }
        }, {
          "id" : 129,
          "name" : "The Glass Menagerie",
          "date" : "2014-01-15T14:00:00",
          "venue" : {
            "id" : 2411,
            "name" : "Booth Theatre",
            "city" : "New York",
            "state" : "NY"
          }
        }, {
          "id" : 130,
          "name" : "Cinderella - The Musical",
          "date" : "2014-01-16T14:00:00",
          "venue" : {
            "id" : 2332,
            "name" : "Broadway Theatre-New York",
            "city" : "New York",
            "state" : "NY"
            
          }
          
        }, {
          "id" : 131,
          "name" : "After Midnight",
          "date" : "2014-01-16T14:00:00",
          "venue" : {
            "id" : 2372,
            "name" : "Brooks Atkinson Theatre",
            "city" : "New York",
            "state" : "NY"
          }
        }, {
          "id" : 132,
          "name" : "Die Fledermaus",
          "date" : "2014-01-16T14:00:00",
          "venue" : {
            "id" : 3244,
            "name" : "Civic Opera House",
            "city" : "Chicago",
            "state" : "IL"
          }
 	} ];

  var getArrayId = function(realId) {
    for (var i = 0, len = _events.length; i < len; i++) {
      if (_events[i].id === realId) {
        var arrayId = i;
      }
    }
    return arrayId;
  };

	can.fixture('GET /services/events', function(request) {
		return _events;
	});
	
	can.fixture('/services/events/{id}', function(request) {
    if (request.data) {
      var index = getArrayId(request.data.id);
			return _events[arrayId];
    }
	});

  can.fixture('/services/events/destroy/{id}', function(request) {
    if (request.data) {
      var index = getArrayId(request.data.id);
      _events.splice(index, 1);
      return _events;
    }
  });

  can.fixture('POST /services/events', function(request) {
    var newEvent = {};
    newEvent.id = request.data.id;
    newEvent.name = request.data.name;
    newEvent.date = request.data.date;
    newEvent.venue.id = request.data.venue.id;
    newEvent.venue.name = request.data.venue.name;
    newEvent.venue.city = request.data.venue.city;
    newEvent.venue.state = request.data.venue.state;
    _events.push(newEvent);
    return _events;    
  });


});