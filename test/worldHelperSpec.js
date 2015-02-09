describe("worldHelper", function(){
	var helper = new worldHelper();
	var creatures = [];
	var c1;
	var c2;
	var c3;

	beforeEach(function(){
		c1 = new creatureObject(1);
		c1.setPosition({x:0,y:0});
		c1.setAlertRange(20);
		creatures.push(c1);

		c2 = new creatureObject(2);
		c2.setPosition({x:15,y:0});
		c2.setAlertRange(20);
		creatures.push(c2);

		c3 = new creatureObject(3);
		c3.setPosition({x:-15,y:0});
		c3.setAlertRange(20);
		creatures.push(c3);
	})

	it("should return filtered AlertList for specific creature", function(){
		// c2 ..... c1 ......c3
	
		//c1 should see two creatures
/*		helper.setAlertListForCreatures(creatures);

		var c1List = creatures[0].getAlerts();
		expect(c1List.length).toBe(2);
		expect(c1List[0].getId()).toEqual(c2.getId());
		expect(c1List[1].getId()).toEqual(c3.getId());

		//c2 should see one creature (c1)
		var c2List = creatures[1].getAlerts();
		expect(c2List.length).toBe(1);
		expect(c2List[0].getId()).toEqual(c1.getId());

		//c3 should see one creature (c1)
		var c3List = creatures[2].getAlerts();
		expect(c3List.length).toBe(1);
		expect(c3List[0].getId()).toEqual(c1.getId());
		*/
	})
})