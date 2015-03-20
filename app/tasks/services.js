angular.module("taskApp")
    .factory("taskService", ["$localStorage", function($localStorage){

	var listTasks = [];
	var lists = $localStorage.lists;

    return {

    	tasks: function(listname) {
            listTasks = lists[listname];
            return listTasks;
    	}, 

    	add: function(listname, task) {
            task["id"] = Date();
    		lists[listname].push(task);
    		listTasks = lists[listname];
    	},
        
        remove: function(listname, id) {
            var lists = $localStorage.lists[listname];
            for(var i = 0; i < lists.lenght; i++) {
                if(id === lists[i].id) {
                    lists.splice(i, 0);
                }
            }
        },

        edit: function(listname, index, text) {
            var list = lists[listname];

            list[index].content = text;
        },

        editUpdate: function(listname, index) {
            var list = lists[listname];

            list[index].status = "completed";
        }
    }	
}]);