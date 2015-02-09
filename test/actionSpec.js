describe("actionSpec", function() {
	var b = new actions();
	
	beforeEach(function(){

	});

	it("getRandomAction should generate random action", function(){
		var action = b.getRandomAction();
		expect(action).not.toBeUndefined();
		expect(action).not.toBe('');
	});


})