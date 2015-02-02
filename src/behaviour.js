behaviour = function() {
	module = {};


	module.validateAndSetPosition = function(currentPosition, direction){
		if (!direction) {
			direction = createRandomDirection();
		}

		currentPosition.x += direction.x;
		currentPosition.y += direction.y;
	};

	module.validateAndSetAlertRange = function(){
		//Todo:
	};

	return module;

}