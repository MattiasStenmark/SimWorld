
var writeWorld = function(){
	var canvas = "<canvas id='myCanvas' width='200' height='100' "+
	"style='border:1px solid #d3d3d3;'>"+
    "Your browser does not support the HTML5 canvas tag.</canvas>";
	document.write(canvas);

}

var init = function(){
	writeWorld();

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.font = "10px Arial";
	ctx.strokeText("o",100,50);
}




init();