app.controller('HomeController', ['$scope', 'listService', function($scope, listService){

    $scope.getLists = function() {
        return listService.lists();
    } 

    $scope.addList = function(name) {
    	listService.add();
    }  
}]);