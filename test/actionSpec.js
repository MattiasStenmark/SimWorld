describe("actionSpec", function() {
	var b = new actions();
	
	beforeEach(function(){

	});

	it("getRandomAction should generate random action", function(){
		var action = b.getRandomAction();
		expect(action).not.toBeUndefined();
		expect(action).not.toBe('');
	});

	describe("validate direction when base is {0,0}", function(){
		var basePosition;
		beforeEach(function(){
			basePosition = {x:0,y:0};
		})
		it("and target is {2,2}", function(){
			var newPosition = {x:2,y:2};
			var direction = b.getDirectionBasedOnTarget(basePosition, newPosition);
			expect(direction).toEqual({x:1,y:1});
		})
		it("and target is {-2,-2}", function(){
			var newPosition = {x:-2,y:-2};
			var direction = b.getDirectionBasedOnTarget(basePosition, newPosition);
			expect(direction).toEqual({x:-1,y:-1});
		})
		it("and target is {0,-2}", function(){
			var newPosition = {x:0,y:-2};
			var direction = b.getDirectionBasedOnTarget(basePosition, newPosition);
			expect(direction).toEqual({x:0,y:-1});
		})
		it("and target is {2,0}", function(){
			var newPosition = {x:2,y:0};
			var direction = b.getDirectionBasedOnTarget(basePosition, newPosition);
			expect(direction).toEqual({x:1,y:0});
		})
		it("and target is {5,-5}", function(){
			var newPosition = {x:5,y:-5};
			var direction = b.getDirectionBasedOnTarget(basePosition, newPosition);
			expect(direction).toEqual({x:1,y:-1});
		})

	})

})