var world = new worldObject();
var g = new graphics();

var canvasHovering = function(e){
	var creatures = world.getCreatures();
	for(var idx=0;idx<creatures.length;idx++){
		var pos = creatures[idx].getCurrentPosition();
		if(Math.abs(e.clientX - pos.x) > 3){
			continue;
		}
		if(Math.abs(e.clientY - pos.y) > 3){
			continue;
		}

		console.log(e.clientX + ','+ e.clientY);
	}
}

var writeWorld = function(size){
	var canvas = "<canvas id='myCanvas' width='"+size.maxX*2+"' height='"+size.maxY*2+"' "+
	"style='border:1px solid #d3d3d3;' onmousemove='canvasHovering(event)''>"+
    "Your browser does not support the HTML5 canvas tag.</canvas>";
	document.write(canvas);

}



var init = function(){
	world.setSize(200);
	world.addCreatures(10);

	writeWorld(world.getSize());
	g.printCreatures(world.getCreatures());

	//Skapa creatures
	//för varje djur, graphics.printCreature(creature)

}




init();