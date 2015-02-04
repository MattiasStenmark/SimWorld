describe("behaviourSpec", function() {
	var b = new behaviour();
	
	beforeEach(function(){

	});

	it("getRandomAction should generate random action", function(){
		var action = b.getRandomAction();
		expect(action).not.toBeUndefined();
		expect(action).not.toBe('');
	});


})