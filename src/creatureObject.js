

function creatureObject() {
	var constants = constantValues();
	var objectType = constants.typeCreature;
	var alertRange = 10;
	
	var currentAlertRange = 0;
	var currentAction = '';
	var currentPosition = {};
	var alerts = [];


	walk = function(direction){

		_validateAndSetDirection(direction);
		_validateAndSetAlertRange();
		currentAction = constants.actionWalk;
	};

	look = function(alertType) {
	 //var filteredAlerts = getAlertsByType(alertType);

		var filteredAlerts = [];
		for(var idx=0;idx<alerts.length;idx++) {
			var myPos = currentPosition;
			var alertPos = alerts[idx].currentPosition;;
			
			var xDiff = Math.abs(myPos.x - alertPos.x);
			var yDiff = Math.abs(myPos.y - alertPos.y);

			if (xDiff <= getAlertRange() && yDiff <= getAlertRange()) {
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

	_validateAndSetAlertRange = function(){

	};

	_validateAndSetDirection = function(direction){
		if (!direction) {
			direction = createRandomDirection();
		}

		currentPosition.x += direction.x;
		currentPosition.y += direction.y;
	};


	return {
		walk: walk,
		look: look,
		setPosition: setPosition,
		setAlertRange: setAlertRange,
		getAlertRange: getAlertRange,
		addAlert: addAlert
	};
}





