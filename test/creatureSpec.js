describe("creatureObject", function() {
	var me = this;
	var constants = constantValues();
	var creature;
	var actionWalk = '';

	beforeEach(function() {
		creature = new creatureObject();
		creature.setPosition({x:0,y:0});
	});

	describe("Phase 1: Looking", function(){
		describe("In order to build the alertList correctly", function() {
				beforeEach(function() {
					creature.setBaseAlertRange(20);

					var c1 = new creatureObject();
					c1.setPosition({x:21,y:5});
					creature.addAlert(c1);

					var c2 = new creatureObject();
					c2.setPosition({x:5,y:-7});
					creature.addAlert(c2);
				});  

				it("should be able to set alertRange", function() {
					creature.setAlertRange(5);
					expect(creature.getAlertRange()).toEqual(5);
				});
			
				it("should be able to look", function() {
					creature.look();
					var alerts = creature.getAlerts();
					expect(alerts.length).toBeGreaterThan(0);
				});

			 	it("should be able to see creatures nearby", function() {
					creature.setBaseAlertRange(30);
					creature.look();
					var creatures = creature.getAlerts();
					expect(creatures.length).toEqual(2);
				});

				it("should be able to see creatures nearby based on alertRange", function() {
					creature.setBaseAlertRange(14);

					creature.look();
					var creatures = creature.getAlerts();
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
	})
	

	describe("Phase 2: Actions", function(){
		describe("general functions for performing actions", function(){
			it("random action should be set by calling setAction with no parameter", function(){
				creature.setAction();
				expect(creature.getCurrentAction()).not.toBe('');
				expect(creature.getCurrentAction()).not.toEqual('');
				expect(creature.getCurrentAction()).not.toBeUndefined();
			});

			it("creature should maintain action for random turns", function(){
				creature.setAction();
				var turns = creature.getActionTurns();

				expect(turns).toBeGreaterThan(0);
			});

			it("creature should get a direction when random action is set", function(){
				creature.setAction();
				var direction = creature.getCurrentDirection();
				expect(direction).not.toBeUndefined;
				expect(direction.x != 0 || direction.y != 0).toBe(true);
			});

			it("should not get a new action or direction if actionTurns haven't reached 0", function(){
				creature.setAction('walking');
				var direction = creature.getCurrentDirection();
				var action = creature.getCurrentAction();
				creature.setAction();

				expect(creature.getCurrentAction()).toBe(action);
				expect(creature.getCurrentDirection()).toBe(direction);
			})
		})



	})

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

	
	
	describe("When seeing other creature", function(){
		beforeEach(function() {
			creature.setBaseAlertRange(20);
			
			var alert1 = new creatureObject();
			alert1.setPosition({x:creature.getCurrentPosition().x+5, y:creature.getCurrentPosition().y});
			creature.addAlert(alert1);	
		});

		it("move close to creature", function(){
			
		});

		it("attack creature when same tile as other creature", function(){

		});

		describe("When attacking", function(){
			it("compare fighting value with creature", function(){

			});
		})

	})

});
