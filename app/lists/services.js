app.factory("listService", ["$localStorage", function($localStorage){
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
            var oldData = JSON.parse(localStorage.getItem('ngStorage-lists'));
            if(oldData.hasOwnProperty(name)){
                delete oldData[name] ;
                localStorage.setItem('ngStorage-lists',JSON.stringify(oldData));
                //$localStorage.lists[oldData];
            }

            //listsData = [];
            //delete $localStorage.lists[name];
            //listsData = [];
            //for(var li in list) {
            //    listsData.push(li);
            //}
        },

        edit: function(initName, newName) {
            var oldData = JSON.parse(localStorage.getItem('ngStorage-lists'));
            //var oldData = $localStorage.lists
            if(oldData.hasOwnProperty(initName)){
                oldData[newName] = oldData[initName] ;
                delete oldData[initName] ;
                localStorage.setItem('ngStorage-lists',JSON.stringify(oldData));
                //$localStorage.lists[oldData];
            }

            //////////////////////////////////
            //listsData = [];
            //Object.defineProperty(list, newName,
            //    Object.getOwnPropertyDescriptor(list, initName));
            //
            //delete list[initName];
            //
            //for(var li in list) {
            //    listsData.push(li);
            //}
            //console.log(listsData);
        }
    }
}]);