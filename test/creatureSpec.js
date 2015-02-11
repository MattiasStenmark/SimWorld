describe("creatureObject", function() {
	var me = this;
	var constants = constantValues();
	var creature;
	var actionWalk = '';

	beforeEach(function() {
		creature = new creatureObject();
		creature.setPosition({x:0,y:0});
	});

	describe("Game phase 1: Looking", function(){
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
		}); 
	})
	

	describe("Game phase 2: Actions", function(){
		describe("general functions for performing actions", function(){
			it("creature should be able to store its position as coordinates", function() {
				creature.walk(constants.directionSouth); 
				expect(creature.getCurrentPosition()).toEqual(constants.directionSouth);
			});

			it("creature should be able to get a random action if alertlist is empty", function(){
				creature.executeEvaluateAndSetAction();
				expect(creature.getCurrentAction()).not.toBe('');
			})

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

			it("should not get a new random action or direction if actionTurns haven't reached 0", function(){
				creature.setAction('walking');
				var direction = creature.getCurrentDirection();
				var action = creature.getCurrentAction();
				creature.setAction();

				expect(creature.getCurrentAction()).toBe(action);
				expect(creature.getCurrentDirection()).toBe(direction);
			})
		})

		describe("validate action based on alertList", function(){
			it("it must be ok to force a new action even if actionTurns is not zero", function(){
				creature.setAction();
				creature.setAction('dosomething');
				expect(creature.getCurrentAction()).toBe("dosomething");
			})

			describe("When alert list is not empty", function(){
				var alert;
				beforeEach(function(){
					alert = new creatureObject();
					creature.addAlert(alert);
				})

				it("action should be set to 'attacking'", function(){
					creature.executeEvaluateAndSetAction();
					expect(creature.getCurrentAction()).toBe(constants.actionAttack);
				})

				it("action should be set to 'fighting' if target is in fighing range", function(){
					creature.setAction(constants.actionAttack);
					creature.setPosition({x:0,y:0});
					alert.setPosition({x:1,y:0});

					creature.executeEvaluateAndSetAction();
					expect(creature.getCurrentAction()).toBe(constants.actionFight);
				})
			})
		})

		describe("when action is set to walking", function(){
			it("creature should be able to execute walking as action", function() {
				creature.setAction(constants.actionWalk);
				creature.executeAction();
				expect(creature.getCurrentAction()).toEqual(constants.actionWalk);
			});

			it("creature should be able to go north", function() {
				creature.setPosition({x:0,y:0});
				creature.walk(constants.directionNorth);
				expect(creature.getCurrentPosition()).toEqual(constants.directionNorth);
			});

			it("creature should be able to walk in random direction", function() {
				var originalPosition = {};
				originalPosition.x = creature.getCurrentPosition().x;
				originalPosition.y = creature.getCurrentPosition().y;
				
				creature.walk();
				expect(creature.getCurrentPosition).not.toEqual(originalPosition);
			});	

			it("creature should move in set direction", function(){
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
		})

		describe("when attacking", function(){
			var victim;
			beforeEach(function(){
				creature.setPosition({x:0,y:0});
				creature.setAlertRange(10);

				victim = new creatureObject();
				victim.setPosition({x:2,y:2});
				victim.setAction(constants.actionIdle);
				victim.setActionTurns(10);
				creature.addAlert(victim);
			})
			it("creature stores its victim in variable", function(){
				creature.executeEvaluateAndSetAction();
				creature.executeAction();
				var selectedAlert = creature.getSelectedAlert();

				expect(selectedAlert.getId()).toBe(victim.getId());
			})
			it("creature moves towards victim", function(){
				creature.executeEvaluateAndSetAction();
				creature.executeAction();
				var pos = creature.getCurrentPosition();
				var dir = creature.getCurrentDirection();
				expect(pos).toEqual({x:1,y:1});
				expect(dir).toEqual({x:1,y:1});	
			})
			it("when creature is close to victim action sets to fight", function(){
				creature.setPosition({x:0,y:0});
				creature.setAction(constants.actionAttack);
				var victim = creature.getAlerts()[0];
				victim.setPosition({x:0,y:1});
				creature.executeEvaluateAndSetAction();

				expect(creature.getCurrentAction()).toBe(constants.actionFight);
			})
			it("when creature attacks, it moves in creature running speed", function(){
				
			})
		})
	
		describe("when fighting", function(){
			beforeEach(function(){
				var victim = new creatureObject();
				victim.setPosition({x:0,y:1});
				
				creature.setPosition({x:0,y:0});
				creature.addAlert(victim);
				creature.setSelectedAlert(victim);
				creature.setAction(constants.actionFight);
			})

			it("creature should get a random attack point when created", function(){
				var points = creature.getAttackPoints();
				expect(points).toBeGreaterThan(0);
			})
			it("creature should get a random defence point when created", function(){
				var points = creature.getDefencePoints();
				expect(points).toBeGreaterThan(0);
			})

		})

	})
});
