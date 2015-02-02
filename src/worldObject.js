function worldObject() {
	var _size = {};
	var _creatures = []; 
	var module = {};

	module.getSize = function(){
		return _size;
	};
	module.setSize = function(size){
		_size = size;
	}

	module.setSize = function(size){
		_size = {
			minX: size*-1,
			maxX: size,
			minY: size*-1,
			maxY: size
		};
	};
	module.getSize = function(){
		return _size;
	};

	module.addCreature = function(){
		var creature = new creatureObject();
		creature.setPosition(this.getRandomPosition());

		_creatures.push(creature);
	};

	module.getCreatures = function(){
		return _creatures;
	};

	module.getRandomPosition = function(){
		var size = this.getSize();
		var position =  {
				x : Math.floor((Math.random() * (size.maxX*2)) - size.maxX),
				y : Math.floor((Math.random() * (size.maxY*2)) - size.maxY)
			};
		
		return position;
	};

	return module;
}