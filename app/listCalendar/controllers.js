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
        { name: 'shop' },
    ];

}]);