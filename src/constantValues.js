function constantValues() {
	var publicModule = {}

	publicModule.actionWalk = 'walking';
	
	publicModule.directionAny = 'any';
	publicModule.directionNorth = {x:0,y:1};
	publicModule.directionSouth = {x:0,y:-1};
	
	publicModule.typeCreature = 'creature';

	return publicModule;
}