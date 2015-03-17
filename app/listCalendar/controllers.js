app.controller('HomeController', ['$scope', 'listService', 'taskService', 
	          function($scope, listService, taskService){

    $scope.showNewListForm = false ;
    $scope.listCount = 20 ;

    $scope.toggleNewListForm = function(){
        $scope.showNewListForm = !$scope.showNewListForm;
    };

    $scope.listsItems = [
        { name: 'Market' },
        { name: 'School' },
        { name: 'Office' },
        { name: 'shop' }
    ];


    $scope.listName = "";
	$scope.lists = [];
	

	//scopes to handle lists

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
    //End of scopes to handle lists

    //begining of scopes to handle  tasks
    $scope.listTasks = [];
    $scope.tasks = {};
    $scope.text = "";
    $scope.priority = "normal";
    $scope.completed = false;

    $scope.getTasks = function(name) {
    	$scope.listTasks = taskService.tasks();
    }

    $scope.addTask = function() {
    	if($scope.text) {
            $scope.tasks.text = $scope.text;
            $scope.tasks.priority = $scope.priority;
            $scope.tasks.completed = $scope.completed;
            taskService.add($scope.tasks);
            $scope.tasks = {};
            $scope.text = "";
    	} 
    }

    $scope.removeTask = function(id) {

    }
    //end of scopes to handle tasks

}]);