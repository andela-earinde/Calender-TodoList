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
    	},
        
        remove: function(listname, index) {
            var list = lists[listname];

            if(list.length === 1 || index === 0) {
                list.shift();
                listTasks = list
            }
            else {
                 list.splice(index, index);  
            }
        },

        edit: function(listname, index, text) {
            var list = lists[listname];

            list[index].content = text;
        }
    }	
}]);