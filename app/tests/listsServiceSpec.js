describe("lists.service: list service test", function(){

	beforeEach(module('taskApp'));

	var data, lStore;

	beforeEach(inject(function(listService, $localStorage){
		data = listService;
		lStore = $localStorage;
	}));

	it("should return an empty array when the list is initially called", function(){
		expect(data.lists()).toEqual([]);
	});

	it("should update the list array with the current name passed when the add function is called",
		function(){        
        data.add("firstName");

        expect(data.lists()).toEqual(["firstName"]);
	});

	it("should store the created list as an array", function() {
        data.add("firstName");
        
        var list = lStore.lists["firstName"];

        expect(list instanceof Array).toBeTruthy();
	});

	it("should remove the list from the storage when the remove function is called", function(){
		data.add("firstName");

		data.remove("firstName");

		expect(data.lists()).toEqual([]);
	});

	it("should edit the name of the list if the a new name is passed", function(){
		data.add("firstName");

		data.edit("firstName", "secondName");

		expect(data.lists()).toEqual(["secondName"]);
	})
});