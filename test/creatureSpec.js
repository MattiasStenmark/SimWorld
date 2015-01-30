describe("creatureObject", function() {
	var constants = constantValues();
	var creature;
	var actionWalk = '';

	beforeEach(function() {
		creature = new creatureObject();
		creature.setPosition({x:0,y:0});
	});

	describe("initial functions", function() {
		it("should be able to set alertRange", function() {
			creature.setAlertRange(5);
			expect(creature.alertRange).toEqual(5);
		});

		it("should be able to add a creature to world", function(){
			var visitor = new creatureObject();
			visitor.setPosition({x:3,y:0});
			creature.addAlert(visitor);
			expect(creature.alerts.length).toBe(1);
		});

	});





	describe("Walking", function() {

		it("should be able to walk", function() {
			creature.walk();
			expect(creature.currentAction).toEqual(constants.actionWalk);
		});
	
		it("should be able to go north", function() {
			creature.walk(constants.directionNorth);
			expect(creature.currentPosition).toEqual(constants.directionNorth);
		});

		it("should be able to store its position as coordinates", function() {
			creature.walk(constants.directionSouth); //Todo: byt ut strängar mot int söder={0,-1} 
			expect(creature.currentPosition).toEqual(constants.directionSouth);
		});

		it("should be able to walk in random direction", function() {
			var originalPosition = {};
			originalPosition.x = creature.currentPosition.x;
			originalPosition.y = creature.currentPosition.y;
			
			creature.walk();
			expect(creature.currentPosition).not.toEqual(originalPosition);
		});
	});

	describe("Looking", function() {
		beforeEach(function() {
				var c1 = new creatureObject();
				c1.setPosition({x:10,y:5});
				creature.addAlert(c1);

				var c2 = new creatureObject();
				c2.setPosition({x:5,y:-7});
				creature.addAlert(c2);
		});  

		it("should be able to look", function() {
			var alerts = creature.look();
			expect(alerts.length).toBeGreaterThan(0);
		});

	 it("should be able to see creatures nearby", function() {
			creature.setAlertRange(12);

			var creatures = creature.look(constants.alertTypeCreature)
			expect(creatures.length).toEqual(2);
		});

		it("should be able to see creatures nearby based on alertRange", function() {
			creature.setAlertRange(7);

			var creatures = creature.look(constants.alertTypeCreature)
			expect(creatures.length).toEqual(1);
		});

		it("alertRange should be less if walking", function() {
			creature.setAlertRange(10);
			creature.walk();
			expect(creature.alertRange).toBeLessThan(10);
		});

	});

});
