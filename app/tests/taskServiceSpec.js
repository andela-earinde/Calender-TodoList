describe("task.tests: tasks service spec", function(){

	beforeEach(module('taskApp'));

	var task, lStore, mockService;

	beforeEach(module(function($provide){
        mockService = {
        	lists: {}
        };

        $provide.value("$localStorage", mockService);   
	}));

	beforeEach(inject(function(taskService, $localStorage){
        task = taskService;
        lStore = $localStorage;
	}));

	it("should return an empty task list when the list is empty", function(){
		lStore.lists["firstName"] = [];

        expect(task.tasks("firstName")).toEqual([]);
	});

	it("should return the tasks of a list if the list have tasks", function(){
		lStore.lists["firstName"] = [{"crapm": "crap"},
		                             {"abc" : "bcd"}];

		expect(task.tasks("firstName")).toEqual([{"crapm": "crap"},
		                                        {"abc" : "bcd"}]);
	});

	it("should add tasks to the list if the add function is called", function(){
	    lStore.lists["firstName"] = [{"crapm": "crap"}];
	    
	    task.add("firstName", {"mm": "oo"});

	    expect(task.tasks("firstName")).toEqual([{"crapm": "crap"},
	    	                                     {"mm": "oo"}]);	
	});

	describe("taskService remove function", function(){
		it("should remove a task from a list when the remove function is called with the task and index of the list",
			function(){
				lStore.lists["firstName"] = [{"crapm": "crap"},
				                              {"mm": "oo"}];
                
                task.remove("firstName", 1);

                expect(task.tasks("firstName")).toEqual([{"crapm": "crap"}]);
			});

		it("should remove a task in index 0 of a list", function(){
		    lStore.lists["firstName"] = [{"crapm": "crap"},
				                              {"mm": "oo"}];
                
            task.remove("firstName", 0);

            expect(task.tasks("firstName")).toEqual([{"mm": "oo"}]);	
		});
	});

	it("should edit the content of a task if the edit function is called", function(){
	    lStore.lists["firstName"] = [{content: "crap"}];
	    
	    task.edit("firstName", 0, "going home");

	    expect(task.tasks("firstName")).toEqual([{content: "going home"}]);
	});
});