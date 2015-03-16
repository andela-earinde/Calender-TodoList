app.controller('HomeController', ['$scope', 'listService', function($scope, listService){

	$scope.lists = [];

    $scope.getLists = function() {
        $scope.lists =  listService.lists();
    } 

    $scope.addList = function(name) {
    	listService.add(name);
    } 

    $scope.removeList = function(name, index) {
    	listService.remove(index);
    } 

}]);