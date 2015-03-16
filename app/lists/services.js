angular.module("taskApp")
    .factory("listService", ["$localStorage",function($localStorage){
	
	var listsData = [];
	$localStorage.lists = {};
	var list = $localStorage.lists;

	return {

		lists: function() {
			listsData = [];
            for(var li in list) {
            	listsData.push(li);
            }
            return listsData;        
		},

		add: function(name) {
			listsData = [];
			$localStorage.lists[name] = [];
			for(var li in list) {
				listsData.push(li);
			}
		},

        remove: function(name) {
            delete $localStorage.lists[name];
            listsData = [];
            for(var li in list) {
				listsData.push(li);
			}
        },
        
        edit: function(initName, newName) {
            Object.defineProperty($localStorage.lists, newName,
                Object.getOwnPropertyDescriptor($localStorage.lists, initName));

            delete $localStorage.lists[initName];

            for(var li in list) {
				listsData.push(li);
			}
        }
	}
}]);