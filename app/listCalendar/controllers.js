app.controller('HomeController', ['$scope', function($scope){

    $scope.showNewListForm = false ;
    $scope.listCount = 20 ;

    $scope.toggleNewListForm = function(){
        $scope.showNewListForm = !$scope.showNewListForm;
    };

    $scope.lists = [
        { name: 'Market' },
        { name: 'School' },
        { name: 'Office' },
        { name: 'shop' }
    ];

}]);


app.controller('HomeController', ['$scope', 'listService', function($scope, listService){
    
    $scope.listName = ""
	$scope.lists = [];
	$scope.listTasks = [];

    $scope.getLists = function() {
        $scope.lists =  listService.lists();
    };

    $scope.addList = function(name) {
    	listService.add(name);
    };

    $scope.removeList = function(name) {
    	listService.remove(name);
    };

    $scope.editList = function(initialName, newName) {
        listService.edit(initialName, newName);    
    }

}]);