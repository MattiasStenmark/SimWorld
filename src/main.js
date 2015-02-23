var world = new worldObject();
var g = new graphics();

var writeWorld = function(size){
	var canvas = "<canvas id='myCanvas' width='"+size.maxX*2+"' height='"+size.maxY*2+"' "+
	"style='border:1px solid #d3d3d3;'>"+
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