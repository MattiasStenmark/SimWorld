function constantValues() {
	var publicModule = {}

	publicModule.actionWalk = 'walking';
	publicModule.actionLook = 'looking';
	publicModule.actionIdle = 'idle';
	publicModule.actionEat	= 'eating';
	publicModule.actionRest = 'resting';
		
	publicModule.directionNorth = {x:0,y:1};
	publicModule.directionSouth = {x:0,y:-1};
	
	publicModule.directions = [
		{x:0,y:1},	//north
		{x:1,y:1},	//northeast
		{x:1,y:0},	//east
		{x:1,y:-1},	//southeast
		{x:0,y:-1},	//south
		{x:-1,y:-1},//southwest
		{x:-1,y:0},	//west
		{x:-1,y:1}, //northwest
	];

	publicModule.typeCreature = 'creature';

	return publicModule;
}