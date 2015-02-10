function creatureObject(id) {
	var constants = constantValues();
	var _actions = new actions();
	var _objectType = constants.typeCreature;
	var _baseAlertRange = 1;
	var _id = id;

	var currentAlertRange = 0;
	var currentAction = '';
	var currentPosition = {};
	var currentActionTurns = 0;
	var alerts = [];
	var selectedAlert = {};
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
	module.getSelectedAlert = function(){
		return selectedAlert;
	}
	module.executeEvaluateAndSetAction = function(){
		if(alerts.length > 0){
			this.setAction(constants.actionAttack);
		}
		else {
			this.setAction();
		}
	};

	module.walk = function(direction){
		var me = this;

		if (!direction){
			direction = currentDirection;
		}

		me.setAction(constants.actionWalk);
		_actions.validateAndSetPosition(currentPosition, direction);
		_actions.setNewAlertRangeByAction(me);
	};

	module.look = function() {
		var alerts = _actions.getAlerts(this);
		this.setAlerts(alerts);
	};

	module.isPredator = function() {
		throw new Error('not Implemented just yet');
	};

	module.setPosition = function(newPosition) {
		currentPosition = newPosition;
	};

	module.setAction = function(action) {
		var evaluateCurrentAction = function(action){
			if (action){
				return action;
			}
			else {
				return _actions.getRandomAction();
			}
		}

		if(action || currentActionTurns == 0){
			currentDirection = _actions.getRandomDirection();
			currentAction = evaluateCurrentAction(action);
			currentActionTurns = _actions.getRandomActionTurns();
		}
		else {
			currentActionTurns -= 1;
		}
	};

	module.executeAction = function(){
		if(currentAction == constants.actionAttack){
			var selAlert = this.getAlerts()[0];
			this.setSelectedAlert(selAlert);
		}

	}

	module.setActionTurns = function(turns){
		currentActionTurns = turns;
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
	module.setSelectedAlert = function(alert){
		selectedAlert = alert;
	}
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





