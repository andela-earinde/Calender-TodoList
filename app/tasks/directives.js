app.directive('tasks', [ '$rootScope', 'taskService', function($rootScope,taskService){
    return{
        restrict: 'E',
        replace: false,
        templateUrl: 'app/tasks/templates/task-tpl.html',
        link: function(scope, elem, attr){
            scope.priority = attr.priority;
            scope.date = attr.date;
            scope.content = attr.content;
            scope.status = attr.status;
            scope.listName = attr.listName;
            scope.taskId = attr.taskId;

            var listName = attr.listName;
            var index = attr.taskId;

            var broadcast = function(){
                $rootScope.$broadcast('event:ListSelected',{listName: listName});
            };

            var el = elem.find('.note-item');
            var check = el.find('.fa-check-circle');
            var del = el.find('.fa-times');
            var body = el.find('.note-body');

            del.on('click', function(e){
                e.preventDefault();
                taskService.remove(listName,index);
                elem.hide();
                broadcast();
            });



        }
    };
}]);