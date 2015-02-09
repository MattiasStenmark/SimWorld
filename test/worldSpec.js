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
				world.addCreature(position);
				world.addCreature(position);
				
				var creatureList = world.getCreatures();
				expect(creatureList[0].getCurrentPosition()).not.toEqual(creatureList[1].getCurrentPosition());
			});

			it("should be able to add 100 creatures", function(){
				world.addCreatures(100);
				expect(world.getCreatures().length).toEqual(100);
			});
		})

		describe("actions in general", function(){
			beforeEach(function() {
				world.addCreatures(3);
			})
			it("they should all return that they are idle", function(){
				
				world.signalUpdateAllCreatureStatus('idle');
				var creatures = world.getCreatures();

				expect(creatures[0].getCurrentAction()).toEqual('idle');
				expect(creatures[1].getCurrentAction()).toEqual('idle');
			})

			it("they should all be able to get a random action", function(){
				world.signalUpdateAllCreatureStatus();
				var creatures = world.getCreatures();
				expect(creatures[0].getCurrentAction()).not.toEqual('');
				expect(creatures[1].getCurrentAction()).not.toEqual('');	
			})
		})

		describe("Phase 1: Looking", function(){
			var c1;
			var c2;
			var c3;
			beforeEach(function(){
				// c1 ..... c2 ......c3
				world.addCreatures("3");
				var creatures = world.getCreatures();
				
				c1 = creatures[0];
				c1.setPosition({x:0,y:0});
				c1.setAlertRange(20);
				
				c2 = creatures[1];
				c2.setPosition({x:15,y:0});
				c2.setAlertRange(20);
				
				c3 = creatures[2];
				c3.setPosition({x:30,y:0});
				c3.setAlertRange(20);
			})


			it("All creatures should update their alertlist", function(){
				world.signalUpdateAllCreaturesAlertList();	
				var creatures = world.getCreatures();
				// c1 ..... c2 ......c3
				//c1 should see one creature (c2)
				var c1List = creatures[0].getAlerts();
				expect(c1List.length).toBe(1);
				expect(c1List[0].getId()).toEqual(c2.getId());
				
				//c2 should see two creatures (c1,c3)
				var c2List = creatures[1].getAlerts();
				expect(c2List.length).toBe(2);
				expect(c2List[0].getId()).toEqual(c1.getId());
				expect(c2List[1].getId()).toEqual(c3.getId());

				//c3 should see one creature (c2)
				var c3List = creatures[2].getAlerts();
				expect(c3List.length).toBe(1);
				expect(c3List[0].getId()).toEqual(c2.getId());
			})
		})
		describe("Phase 2: Action", function(){
			it("All creatures should perform actions", function(){
				world.updateAllCreatu

			})	



		})
	})
})