function worldObject() {
	var _size = {};
	var module = {};

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
	}

	return module;
}