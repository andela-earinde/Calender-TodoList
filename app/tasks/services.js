angular.module("taskApp")
    .factory("taskService", ["$localStorage", function($localStorage){

	var listTasks = [];
	var lists = $localStorage.lists

    return {

    	tasks: function(listname) {
            listTasks = lists[listname];
            return listTasks;
    	}, 

    	add: function(listname, task) {
    		lists[listname].push(task);
    		listTasks = lists[listname];
    	}
    }	
}]);