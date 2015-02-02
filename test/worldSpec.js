describe("worldObject", function(){
	var constants = constantValues();
	var world;

	beforeEach(function(){
		world = new worldObject();
	});
	it("should be able to create a new world", function(){
		world.setSize(100);
		expect(world.getSize()).toEqual({minX: -100, maxX:100, minY:-100, maxY:100});
	});
})