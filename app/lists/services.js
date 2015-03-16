angular.module("taskApp")
    .factory("listService", ["$localStorage",function($localStorage){
	
	var listsData = [];
	$localStorage.lists = {};
	var list = $localStorage.lists;

	return {

		lists: function() {
            for(var li in list) {
            	listsData.push(li);
            }
            return listsData;        
		},

		add: function(name) {
			$localStorage.lists[name] = [];
			for(var li in list) {
				listsData.push(li);
			}
		},

        remove: function(name) {
            delete $localStorage.lists[name];

            for(var li in list) {
				listsData.push(li);
			}
        },
        
        edit: function(initName, newName) {
            Object.defineProperty($localStorage.lists, newName,
                Object.getOwnPropertyDescriptor($localStorage.lists, initName));

            for(var li in list) {
				listsData.push(li);
			}
        }
	}
}]);