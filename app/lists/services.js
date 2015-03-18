app.factory("listService", ["$localStorage",function($localStorage){
<<<<<<< HEAD
    
=======

>>>>>>> 517618529bae1fdc1c8decab2a01d81204ce20be
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
            listsData = [];
            for(var li in list) {
                listsData.push(li);
            }
<<<<<<< HEAD
            return listsData;        
=======
            return listsData;
>>>>>>> 517618529bae1fdc1c8decab2a01d81204ce20be
        },

        add: function(name) {
            listsData = [];
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