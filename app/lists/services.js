app.factory("listService", ["$localStorage",function($localStorage){
	
	var listsData = [];
    var list;
    if($localStorage.lists){
      list = $localStorage.lists
    }
    else {
       list = $localStorage.lists = {};
    }
	return {

		lists: function() {
<<<<<<< HEAD
            listsData = [];
=======
			listsData = [];
>>>>>>> 3cea4fb80c4cb7a733235f0dcd015d9693af966a
            for(var li in list) {
            	listsData.push(li);
            }
            return listsData;        
		},

		add: function(name) {
<<<<<<< HEAD
            listsData = [];
=======
			listsData = [];
>>>>>>> 3cea4fb80c4cb7a733235f0dcd015d9693af966a
			$localStorage.lists[name] = [];
			for(var li in list) {
				listsData.push(li);
			}
		},

        remove: function(name) {
            listsData = [];
            delete $localStorage.lists[name];
            listsData = [];
            for(var li in list) {
				listsData.push(li);
			}
        },
        
        edit: function(initName, newName) {
            listsData = [];
            Object.defineProperty($localStorage.lists, newName,
                Object.getOwnPropertyDescriptor($localStorage.lists, initName));

            delete $localStorage.lists[initName];

            for(var li in list) {
				listsData.push(li);
			}
        }
	}
}]);