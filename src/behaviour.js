behaviour = function() {
	module = {};

	module.look = function(me, alertType) {
		var filteredAlerts = [];
		var alerts = me.getAlerts();

		for(var idx=0;idx<alerts.length;idx++) {
			var myPos = me.getCurrentPosition();
			var alertPos = alerts[idx].getCurrentPosition();
			
			var xDiff = Math.abs(myPos.x - alertPos.x);
			var yDiff = Math.abs(myPos.y - alertPos.y);

			if (xDiff <= me.getAlertRange() && yDiff <= me.getAlertRange()) {
				filteredAlerts.push(alerts[idx]);
			}
		}
		return filteredAlerts;
	};


	module.validateAndSetPosition = function(currentPosition, direction){
		if (!direction) {
			direction = createRandomDirection();
		}

		currentPosition.x += direction.x;
		currentPosition.y += direction.y;
	};

	module.validateAndSetAlertRange = function(){
		//Todo:
	};

	return module;

}