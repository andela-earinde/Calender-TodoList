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
            console.log(id);
            var lists = $localStorage.lists[listname];
            for(var i = 0; i < lists.length; i++) {
                if(id === lists[i].id) {
                    lists.splice(i, 1);
                }
            }
        },

        edit: function(listname, id, text) {
            var list = lists[listname];

            for(var i = 0; i < list.length; i++) {
                if(id === list[i].id) {
                    list[i].content = text;
                }
            }
        },

        editUpdate: function(listname, id) {
            var list = lists[listname];

            for(var i = 0; i < list.length; i++) {
                if(id === list[i].id) {
                    list[i].status = "completed";
                }
            }

            //list[index].status = "completed";
        }
    }	
}]);