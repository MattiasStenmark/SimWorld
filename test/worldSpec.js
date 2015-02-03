describe("worldObject", function(){
	var constants = constantValues();
	var world;

	beforeEach(function(){
		world = new worldObject();
		world.setSize(100);
	});

	it("should be able to create a new world", function(){
		expect(world.getSize()).toEqual({minX: -100, maxX:100, minY:-100, maxY:100});
	});

	describe("When world exists", function(){
		it("should be able to add a creature at random position depending on world size", function(){
			world.addCreature();
			expect(world.getCreatures().length).toEqual(1);
		});

		describe("when adding a creature", function(){
			it("should not be able to add a creature at the same position as another", function(){
				var position = world.getRandomPosition();
				var creature1 = world.addCreature(position);
				var creature2 = world.addCreature(position);
				
				var creatureList = world.getCreatures();
				expect(creatureList[0].getCurrentPosition()).not.toEqual(creatureList[1].getCurrentPosition());
			})
		})
	})
})