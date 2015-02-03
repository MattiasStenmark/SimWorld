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

	module.addCreature = function(fixedPosition){
		var creature = new creatureObject();

		var position = fixedPosition;
		if (!fixedPosition || !this.isUniquePositionInWorld(fixedPosition)){
			position = this.getRandomPosition();
		}
		
		creature.setPosition(position);
		_creatures.push(creature);
	};
	module.addCreatures = function(number){
		if(!number){
			return;
		}
		var startTime = new Date();
		for(var idx=0;idx<number;idx++){
			module.addCreature();
		}
		var endTime = new Date();
		console.log("adding "+number+" creatures: startTime:" 
			+startTime.getSeconds() + "."+startTime.getMilliseconds()+ "...done: "
			+endTime.getSeconds() + "."+endTime.getMilliseconds());
	}

	module.getCreatures = function(){
		return _creatures;
	};

	module.getRandomPosition = function(){
		var size = this.getSize();
		
		var position = {};
		do {
			position =  {
				x : Math.floor((Math.random() * (size.maxX*2)) - size.maxX),
				y : Math.floor((Math.random() * (size.maxY*2)) - size.maxY)
			};
		} while(!this.isUniquePositionInWorld(position))
		
		return position;
	};

	module.isUniquePositionInWorld = function(newPosition){
		var creatures = this.getCreatures();
		for(var idx=0;idx<creatures.length;idx++){
			if(creatures[idx].getCurrentPosition() == newPosition){
				return false;
			}
		}
		return true;
	};

	module.updateAllCreatureStatus = function(action){
		var creatures = this.getCreatures();
		for(var idx=0; idx<creatures.length; idx++){
			creatures[idx].setAction(action);
		}
	};

	return module;
}