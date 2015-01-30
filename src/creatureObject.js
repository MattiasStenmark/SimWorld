function creatureObject() {
	this.constants = constantValues();
	this.objectType = this.constants.typeCreature;
	this.alertRange = 10;
	
	this.currentAction = '';
	this.currentPosition = {};
	this.alerts = [];
}

creatureObject.prototype.objectType = '';

creatureObject.prototype.isPredator = function() {
	throw new Error('not Implemented just yet');
};

creatureObject.prototype.walk = function(direction) {
	this._validateAndSetDirection(direction);
	this._validateAndSetAlertRange();
	this.currentAction = this.constants.actionWalk;
};


creatureObject.prototype.setPosition = function(newPosition) {
	this.currentPosition = newPosition;
};

creatureObject.prototype.createRandomDirection = function() {
	var newDirection = {};
	do {
		newDirection = {
			x : Math.floor((Math.random() * 3) - 1),
			y : Math.floor((Math.random() * 3) - 1)
		};
	} while (newDirection.x == 0 && newDirection.y == 0);
	
	return newDirection;
};

creatureObject.prototype.look = function(alertType) {
	 //var filteredAlerts = this.getAlertsByType(alertType);

	var filteredAlerts = [];
	for(var idx=0;idx<this.alerts.length;idx++) {
		var myPos = this.currentPosition;
		var alertPos = this.alerts[idx].currentPosition;;
		
		var xDiff = Math.abs(myPos.x - alertPos.x);
		var yDiff = Math.abs(myPos.y - alertPos.y);

		if (xDiff <= this._getAlertRange() && yDiff <= this.getAlertRange()) {
			filteredAlerts.push(this.alerts[idx]);
		}
	}
	return filteredAlerts;
};

creatureObject.prototype.getAlertsByType = function(alertType) {
	var filteredAlerts = [];
	for(var idx=0;idx<this.alerts.length;idx++) {
		if (this.alerts[idx].alertType === alertType) {
			filteredAlerts.push(this.alerts[idx]);
		}
	}
	return filteredAlerts;
};

creatureObject.prototype.setAlertRange = function(range) {
	this.currentAlertRange = range;	
};

creatureObject.prototype.addAlert = function(alertObject) {
	this.alerts.push(alertObject);
}

creatureObject.prototype._getAlertRange = function(){
	if(!this.currentAlertRange) {
		this.currentAlertRange = this.alertRange;
	}

	return this.currentAlertRange;
};

creatureObject.prototype._validateAndSetAlertRange = function(){

};

creatureObject.prototype._validateAndSetDirection = function(direction){
	if (!direction) {
		direction = this.createRandomDirection();
	}

	this.currentPosition.x += direction.x;
	this.currentPosition.y += direction.y;
};
