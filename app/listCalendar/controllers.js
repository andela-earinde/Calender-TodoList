angular.module("taskApp")
    .controller('HomeController', ['$scope', 'listService', function($scope, listService){
    
    $scope.listName = ""
	$scope.lists = [];
	$scope.listTasks = [];

    $scope.getLists = function() {
        $scope.lists =  listService.lists();
    } 

    $scope.addList = function(name) {
    	listService.add(name);
    } 

    $scope.removeList = function(name) {
    	listService.remove(name);
    } 

    $scope.editList = function(initialName, newName) {
        listService.edit(initialName, newName);    
    }

}]);