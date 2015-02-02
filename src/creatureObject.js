

function creatureObject() {
	var _constants = constantValues();
	var _stuff = behaviour();
	var _objectType = _constants.typeCreature;
	var _baseAlertRange = 1;
	
	var currentAlertRange = 0;
	var currentAction = '';
	var currentPosition = {};
	var alerts = [];

	walk = function(direction){
		var me = this;
		currentAction = _constants.actionWalk;
		_stuff.validateAndSetPosition(currentPosition, direction);
		_stuff.setNewAlertRangeByAction(me);
	};

	look = function(alertType) {
	  	var me = this;
	  	me.currentAction = _constants.actionLook;
	  	_stuff.setNewAlertRangeByAction(me);
		
		var filteredAlerts = _stuff.look(me, alertType);
		return filteredAlerts;
	};

	isPredator = function() {
		throw new Error('not Implemented just yet');
	};

	setPosition = function(newPosition) {
		currentPosition = newPosition;
	};

	getAlertsByType = function(alertType) {
		return _stuff.getAlertsByType(me, alertType);
	};

	addAlert = function(alertObject) {
		alerts.push(alertObject);
	};

	setAlertRange = function(range) {
		currentAlertRange = range;	
	};

	setBaseAlertRange = function(range) {
		_baseAlertRange = range;	
	};
	getBaseAlertRange = function() {
		return _baseAlertRange;
	};
	getAlertRange = function(){
		if(!currentAlertRange) {
			currentAlertRange = _baseAlertRange;
		}
		return currentAlertRange;
	};

	getAlerts = function(){
		return alerts;
	};

	getAction = function(){
		return currentAction;
	};

	getCurrentPosition = function(){
		return currentPosition;
	}

	return {
		objectType: _objectType,
		currentAlertRange: currentAlertRange,
		currentAction: currentAction,
		currentPosition: currentPosition,
		alerts: alerts,

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
		getCurrentPosition: getCurrentPosition
	};
}





