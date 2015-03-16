describe("lists.service: list service test", function(){

	beforeEach(module('taskApp'));

	var data;

	beforeEach(inject(function(listService){
		data = listService;
	}));

	it("it should return an empty array when the list is initially called", function(){
		expect(data.lists()).toEqual([]);
	});
});