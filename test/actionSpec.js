describe("actionSpec", function() {
	var b = new actions();
	
	beforeEach(function(){

	});

	it("getRandomAction should generate random action", function(){
		var action = b.getRandomAction();
		expect(action).not.toBeUndefined();
		expect(action).not.toBe('');
	});

	it("validate direction based on target", function(){
		var basePosition = {x:0,y:0};
		var newPosition = {x:2,y:2};
		var direction = b.getDirectionBasedOnTarget(basePosition, newPosition);

		expect(direction).toBe({x:1,y:1});
	})

})