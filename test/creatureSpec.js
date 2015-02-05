describe("creatureObject", function() {
	var me = this;
	var constants = constantValues();
	var creature;
	var actionWalk = '';

	beforeEach(function() {
		creature = new creatureObject();
		creature.setPosition({x:0,y:0});
	});

	describe("general functions", function() {
		it("should be able to set alertRange", function() {
			creature.setAlertRange(5);
			expect(creature.getAlertRange()).toEqual(5);
		});

		it("should be able to add a creature to world", function(){
			var visitor = new creatureObject();
			visitor.setPosition({x:3,y:0});
			creature.addAlert(visitor);
			expect(creature.getAlerts().length).toBe(1);
		});

		it("should set random action by calling setAction with no parameter", function(){
			creature.setAction();
			expect(creature.getCurrentAction()).not.toBe('');
			expect(creature.getCurrentAction()).not.toEqual('');
			expect(creature.getCurrentAction()).not.toBeUndefined();
		});

		it("should maintain action for random turns", function(){
			creature.setAction();
			var turns = creature.getActionTurns();

			expect(turns).toBeGreaterThan(0);
		});
		
		it("should get a direction when random action is set", function(){
			creature.setAction();
			var direction = creature.getCurrentDirection();
			expect(direction).not.toBeUndefined;
			expect(direction.x != 0 || direction.y != 0).toBe(true);
		});

		it("should not get a new action and direction if actionTurns havent reached 0", function(){
			creature.setAction('walking');
			var direction = creature.getCurrentDirection();
			var action = creature.getCurrentAction();
			creature.setAction();

			expect(creature.getCurrentAction()).toBe(action);
			expect(creature.getCurrentDirection()).toBe(direction);
		})

	});

	describe("Walking", function() {

		it("should be able to walk", function() {
			creature.walk();
			expect(creature.getCurrentAction()).toEqual(constants.actionWalk);
		});
	
		it("should be able to go north", function() {
			creature.walk(constants.directionNorth);
			expect(creature.getCurrentPosition()).toEqual(constants.directionNorth);
		});

		it("should be able to store its position as coordinates", function() {
			creature.walk(constants.directionSouth); 
			expect(creature.getCurrentPosition()).toEqual(constants.directionSouth);
		});

		it("should be able to walk in random direction", function() {
			var originalPosition = {};
			originalPosition.x = creature.getCurrentPosition().x;
			originalPosition.y = creature.getCurrentPosition().y;
			
			creature.walk();
			expect(creature.getCurrentPosition).not.toEqual(originalPosition);
		});

		it("should move in set direction", function(){
			creature.walk({x:1,y:1});
			creature.setActionTurns(2);
			var currentPos = creature.getCurrentPosition();
			var currentDirection = creature.getCurrentDirection();
			var expectedPosition = {
				x:currentPos.x+currentDirection.x,
				y:currentPos.x+currentDirection.y
			};

			creature.walk();
			expect(creature.getCurrentPosition()).toEqual(expectedPosition);
		})
	});

	describe("Looking", function() {
		beforeEach(function() {
			creature.setBaseAlertRange(20);

			var c1 = new creatureObject();
			c1.setPosition({x:21,y:5});
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
			creature.setBaseAlertRange(30);

			var creatures = creature.look(constants.alertTypeCreature)
			expect(creatures.length).toEqual(2);
		});

		it("should be able to see creatures nearby based on alertRange", function() {
			creature.setBaseAlertRange(14);

			var creatures = creature.look(constants.alertTypeCreature)
			expect(creatures.length).toEqual(1);
		});

		it("alertRange should be less if walking", function() {
			creature.setBaseAlertRange(10);
			creature.walk();
			expect(creature.getAlertRange()).toBe(5);
		});

		it("alertRange should be max if looking", function() {
			creature.setBaseAlertRange(10);
			creature.setAlertRange(1);
			creature.look();
			expect(creature.getAlertRange()).toBe(10);
		})

	});
	
	describe("When seeing other creature", function(){
		it("move close to creature", function(){
			expect(false).toBe(true);
		});

		it("attack creature when same tile as other creature", function(){

		});

		decribe("When attacking", function(){
			it("compare fighting value with creature", function(){

			});
		})

	})

});
