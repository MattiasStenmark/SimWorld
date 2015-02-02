

function creatureObject() {
	var constants = constantValues();
	var stuff = behaviour();

	var objectType = constants.typeCreature;
	var alertRange = 1;
	
	var currentAlertRange = 0;
	var currentAction = '';
	var currentPosition = {};
	var alerts = [];


	walk = function(direction){
		var me = this;
		currentAction = constants.actionWalk;
		stuff.validateAndSetPosition(currentPosition, direction);
		stuff.setNewAlertRangeByAction(me);
	};

	look = function(alertType) {
	  	var me = this;
	  	me.setAction(constants.actionLook);
	  	stuff.setNewAlertRangeByAction(me);
		
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

	setBaseAlertRange = function(range) {
		alertRange = range;	
	};
	getBaseAlertRange = function() {
		return alertRange;
	};
	getAlertRange = function(){
		if(!currentAlertRange) {
			currentAlertRange = alertRange;
		}
		return currentAlertRange;
	};

	getAlerts = function(){
		return alerts;
	};

	getAction = function(){
		return currentAction;
	};

	setAction = function(action) {
		currentAction = action;
	};

	getCurrentPosition = function(){
		return currentPosition;
	}

	return {
		walk: walk,
		look: look,
		setPosition: setPosition,
		setAlertRange: setAlertRange,
		setBaseAlertRange: setBaseAlertRange,
		getBaseAlertRange: getBaseAlertRange,
		getAlertRange: getAlertRange,
		addAlert: addAlert,
		getAlerts: getAlerts,
		getAction: getAction,
		setAction: setAction,
		getCurrentPosition: getCurrentPosition
	};
}





