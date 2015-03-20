app.controller('HomeController', ['$rootScope', '$scope', 'listService', 'taskService','$mdDialog',
    function($rootScope, $scope, listService, taskService,$mdDialog){

        $scope.showNewListForm = false;
        $scope.showNewTaskForm = false;
        $scope.currentList = {} ;
        $scope.listCount = 0 ;
        $rootScope.Lists = [];
        $scope.noteItems = [];

        $scope.updateList = function(){
            $rootScope.Lists = listService.lists();
            $scope.listCount = $rootScope.Lists.length;
        };

        $scope.$on("event:ListServiceCalled", function(evt,arg){
            $scope.listCount--;
            $scope.$apply();
        });


        $scope.$on("event:ListSelected", function(event, data){
            console.log("crap");
            $scope.currentList.name = data.listName;
            $scope.noteItems = taskService.tasks(data.listName);
            $scope.currentList.count = $scope.noteItems.length;
            $scope.$apply();
        });

        $scope.updateList();

        $scope.toggleNewListForm = function(){
            $scope.showNewListForm = !$scope.showNewListForm;
        };

        $scope.toggleNewTaskForm = function(){
            $scope.showNewTaskForm = !$scope.showNewTaskForm;
        };

        $scope.listFormSubmit = function(data, evt){
            if(/\w+\s\w+/.test(data.name) || data.name.length < 2){
                $mdDialog.show(
                    $mdDialog.alert()
                        .content('list name has to be a word, no spaces')
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

        $scope.newTaskSubmit = function(data,evt){

            var shout = function(msg){
                $mdDialog.show(
                    $mdDialog.alert()
                        .content(msg)
                        .ok('Got it!')
                        .targetEvent(evt)
                );
            };

            if(!data.content || data.content.length < 2){
                shout('list note must contain text');
            }
            else if(!data.list){
                shout('you have to choose a list');
            }
            else if(data.date == null){
                shout('you have to set date');
            }
            else if(!data.priority){
                shout('you have to set priority');
            }else{
                var taskData = {
                    content: data.content,
                    list: data.list,
                    date: data.date,
                    priority: data.priority,
                    status: 'pending'
                };

                $scope.currentList.name = taskData.list;

                taskService.add(taskData.list,taskData);
                taskData = {};
                $scope.noteItems = taskService.tasks($scope.currentList.name);
                $scope.currentList.count = $scope.noteItems.length;
                angular.element('.resetForm').click();
                $scope.toggleNewTaskForm();
            }

        };

    }]);