function graphics(){


	var module = {};

	module.printCreatures = function(creatures){
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "10px Arial";

		for(var idx=0;idx<creatures.length;idx++){
			var position = creatures[idx].getCurrentPosition();
			ctx.strokeText("o",position.x,position.y);
		}
	}

	return module;
}	