app.controller('HomeController', ['$scope', 'listService', 'taskService','$mdDialog',
    function($scope, listService, taskService,$mdDialog){

        $scope.showNewListForm = false ;
        $scope.listCount = 0 ;
        $scope.Lists = [];

        $scope.updateList = function(){
            $scope.Lists = listService.lists();
            $scope.listCount = $scope.Lists.length;
        };

        $scope.updateList();

        $scope.toggleNewListForm = function(){
            $scope.showNewListForm = !$scope.showNewListForm;
        };

        $scope.showAlert = function(ev) {

        };

        $scope.listFormSubmit = function(data, evt){
            if(/\w+\s\w+/.test(data.name)){
                $mdDialog.show(
                    $mdDialog.alert()
                        .content('list name has to be one word, no spaces')
                        .ok('Got it!')
                        .targetEvent(evt)
                );
            }else{
                $('.resetForm').click();
                $scope.toggleNewListForm();
                listService.add(data.name);
                $scope.updateList();
            }
        };

        $scope.noteItems = [
            {priority: 'normal', status: 'pending', content: "make the money don't let the money make you"},
            {priority: 'high', status: 'completed',  content: 'Man know thyself, and be cautious of thy ways'},
            {priority: 'normal', status: 'timedout',  content: 'nothing is given freely'},
            {priority: 'high', status: 'pending',  content: 'a word is enough for the wise who wants to live'},
            {priority: 'normal', status: 'completed',  content: 'nobody owes you shit, if you want something work for it period'},
            {priority: 'high', status: 'timedout',  content: 'Lorem ipsum dolor sit amet, whatever dude'},
            {priority: 'normal', status: 'pending',  content: 'Lorem ipsum dolor sit amet, whatever dude'}
        ];

        /*
         $scope.$on('$viewContentLoaded', function(){
         $scope.updateList();
         });
         */

        //task functions for tasks
        $scope.getTasks = function(listName, task) {
            taskService.tasks(listName, task);
        }

        $scope.addTasks = function(listName, task) {
            taskService.add(listName, task);
        }

    }]);