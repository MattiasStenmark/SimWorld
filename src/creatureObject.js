

function creatureObject() {
	var constants = constantValues();
	var stuff = behaviour();

	var objectType = constants.typeCreature;
	var alertRange = 10;
	
	var currentAlertRange = 0;
	var currentAction = '';
	var currentPosition = {};
	var alerts = [];


	walk = function(direction){

		stuff.validateAndSetPosition(currentPosition, direction);
		stuff.validateAndSetAlertRange(currentAlertRange);
		currentAction = constants.actionWalk;
	};

	look = function(alertType) {
	 //var filteredAlerts = getAlertsByType(alertType);
	  	var me = this;
		var filteredAlerts = [];
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


	isPredator = function() {
		throw new Error('not Implemented just yet');
	};

	setPosition = function(newPosition) {
		currentPosition = newPosition;
	};

	createRandomDirection = function() {
		var newDirection = {};
		do {
			newDirection = {
				x : Math.floor((Math.random() * 3) - 1),
				y : Math.floor((Math.random() * 3) - 1)
			};
		} while (newDirection.x == 0 && newDirection.y == 0);
		
		return newDirection;
	};



	getAlertsByType = function(alertType) {
		var filteredAlerts = [];
		for(var idx=0;idx<alerts.length;idx++) {
			if (alerts[idx].alertType === alertType) {
				filteredAlerts.push(alerts[idx]);
			}
		}
		return filteredAlerts;
	};

	addAlert = function(alertObject) {
		alerts.push(alertObject);
	};

	setAlertRange = function(range) {
		currentAlertRange = range;	
	};

	getAlertRange = function(){
		if(!currentAlertRange) {
			currentAlertRange = alertRange;
		}

		return currentAlertRange;
	};

	getAlerts = function(){
		return alerts;
	}

	getCurrentAction = function(){
		return currentAction;
	}

	getCurrentPosition = function(){
		return currentPosition;
	}


	return {
		walk: walk,
		look: look,
		setPosition: setPosition,
		setAlertRange: setAlertRange,
		getAlertRange: getAlertRange,
		addAlert: addAlert,
		getAlerts: getAlerts,
		getCurrentAction: getCurrentAction,
		getCurrentPosition: getCurrentPosition
	};
}





