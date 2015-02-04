function constantValues() {
	var publicModule = {}

	publicModule.actionWalk = 'walking';
	publicModule.actionLook = 'looking';
	publicModule.actionIdle = 'idle';
	publicModule.actionEat	= 'eating';
	publicModule.actionRest = 'resting';
		
	publicModule.directionNorth = {x:0,y:1};
	publicModule.directionSouth = {x:0,y:-1};

	publicModule.typeCreature = 'creature';

	return publicModule;
}