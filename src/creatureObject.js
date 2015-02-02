

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
		currentAction = constants.actionWalk;
		stuff.validateAndSetPosition(currentPosition, direction);
		currentAlertRange = stuff.getNewAlertRangeByAction(alertRange, currentAction);
	};

	look = function(alertType) {
	  	var me = this;
		var filteredAlerts = stuff.look(me, alertType);
		return filteredAlerts;
	};

	isPredator = function() {
		throw new Error('not Implemented just yet');
	};

	setPosition = function(newPosition) {
		currentPosition = newPosition;
	};

	getAlertsByType = function(alertType) {
		return stuff.getAlertsByType(me, alertType);
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





