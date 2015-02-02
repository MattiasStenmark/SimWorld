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

	describe("in the world", function(){
		it("should be able to add a creature at random position depending on world size", function(){
			world.addCreature();
			expect(world.getCreatures().length).toEqual(1);
		});


	})
})