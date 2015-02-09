function creatureObject(id) {
	var _constants = constantValues();
	var _actions = new actions();
	var _objectType = _constants.typeCreature;
	var _baseAlertRange = 1;
	var _id = id;

	var currentAlertRange = 0;
	var currentAction = '';
	var currentPosition = {};
	var currentActionTurns = 0;
	var alerts = [];

	var module = {};


	module.getId = function(){
		return _id;
	}
	module.getCurrentAlertRange = function(){
		return currentAlertRange;
	}
	module.getCurrentAction = function(){
		return currentAction;
	}
	module.getCurrentPosition = function(){
		return currentPosition;
	}
	module.getCurrentPosition = function(){
		return currentPosition;
	}
	module.getCurrentDirection = function(){
		return currentDirection;
	}
	module.getAlerts = function(){
		return alerts;
	}
	module.getActionTurns = function(){
		return currentActionTurns;
	}
	module.getAlerts = function(){
		return alerts;
	};

	module.walk = function(direction){
		var me = this;

		if (!direction){
			direction = currentDirection;
		}

		me.setAction(_constants.actionWalk);
		_actions.validateAndSetPosition(currentPosition, direction);
		_actions.setNewAlertRangeByAction(me);
	};

	module.look = function() {
	  	var me = this;
	  	me.currentAction = _constants.actionLook;
	  	_actions.setNewAlertRangeByAction(me);
		
		var alerts = _actions.look(me);
		me.setAlerts(alerts);
	};

	module.isPredator = function() {
		throw new Error('not Implemented just yet');
	};

	module.setPosition = function(newPosition) {
		currentPosition = newPosition;
	};

	module.setAction = function(action) {
		if (currentActionTurns != 0){
			currentActionTurns -= 1;
			return;	
		}

		currentDirection = _actions.getRandomDirection();
		currentAction = this.setCurrentAction(action);
		currentActionTurns = _actions.getRandomActionTurns();
	};

	module.setActionTurns = function(turns){
		currentActionTurns = turns;
	};

	module.setCurrentAction = function(action){
		if (action){
			return action;
		}
		else {
			return _actions.getRandomAction();	
		}
	};
	module.getAlertsByType = function(alertType) {
		return _actions.getAlertsByType(me, alertType);
	};

	module.addAlert = function(alertObject) {
		alerts.push(alertObject);
	};
	module.setAlerts = function(alertObjects){
		alerts = alertObjects;
	}
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
	module.setAlerts = function(newAlerts){
		alerts = newAlerts;
	}



	return module;
}





