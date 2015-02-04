function creatureObject() {
	var _constants = constantValues();
	var _stuff = behaviour();
	var _objectType = _constants.typeCreature;
	var _baseAlertRange = 1;

	var currentAlertRange = 0;
	var currentAction = '';
	var currentPosition = {};
	var alerts = [];

	var module = {};

	module.getCurrentAlertRange = function(){
		return currentAlertRange;
	}
	module.getCurrentAction = function(){
		return currentAction;
	}
	module.getCurrentPosition = function(){
		return currentPosition;
	}
	module.getAlerts = function(){
		return alerts;
	}

	module.walk = function(direction){
		var me = this;
		me.setAction(_constants.actionWalk);
		_stuff.validateAndSetPosition(currentPosition, direction);
		_stuff.setNewAlertRangeByAction(me);
	};

	module.look = function(alertType) {
	  	var me = this;
	  	me.currentAction = _constants.actionLook;
	  	_stuff.setNewAlertRangeByAction(me);
		
		var filteredAlerts = _stuff.look(me, alertType);
		return filteredAlerts;
	};

	module.isPredator = function() {
		throw new Error('not Implemented just yet');
	};

	module.setPosition = function(newPosition) {
		currentPosition = newPosition;
	};

	module.setAction = function(action) {
		if (action){
			currentAction = action;
			return;
		}

		currentAction = _stuff.getRandomAction();

	}
	module.getAlertsByType = function(alertType) {
		return _stuff.getAlertsByType(me, alertType);
	};

	module.addAlert = function(alertObject) {
		alerts.push(alertObject);
	};

	module.setAlertRange = function(range) {
		currentAlertRange = range;	
	};

	module.setBaseAlertRange = function(range) {
		_baseAlertRange = range;	
	};
	module.getBaseAlertRange = function() {
		return _baseAlertRange;
	};
	module.getAlertRange = function(){
		if(!currentAlertRange) {
			currentAlertRange = _baseAlertRange;
		}
		return currentAlertRange;
	};

	module.getAlerts = function(){
		return alerts;
	};

	module.getCurrentPosition = function(){
		return currentPosition;
	}

	return module;
}





