behaviour = function() {
	module = {};



	var createRandomDirection = function() {
		var newDirection = {};
		do {
			newDirection = {
				x : Math.floor((Math.random() * 3) - 1),
				y : Math.floor((Math.random() * 3) - 1)
			};
		} while (newDirection.x == 0 && newDirection.y == 0);
		
		return newDirection;
	};


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

	module.getAlertsByType = function(me, alertType) {
		var alerts = me.alerts;
		var filteredAlerts = [];

 		for(var idx=0;idx<me.alerts.length;idx++) {
			if (alerts[idx].alertType === alertType) {
				filteredAlerts.push(alerts[idx]);
			}
		}
		return filteredAlerts;
	};


	module.getNewAlertRangeByAction = function(alertRange, actionType){
		var c = constantValues();
		var modification = 1.0;
		
		switch (actionType) {
			case c.actionWalk:
				modification = 0.5;
				break;
			case c.actionLook:
				modification = 1;
				break;
		}

		var newRange = Math.floor(alertRange * modification);
		return newRange;
	};

	return module;


}