app.directive('tasks', [ '$rootScope', 'taskService', function($rootScope,taskService){
    return{
        restrict: 'E',
        replace: false,
        templateUrl: 'app/tasks/templates/task-tpl.html',
        link: function(scope, elem, attr){
            scope.priority = attr.priority;
            scope.dateObj = attr.date;
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

            check.on('click', function(e){
                e.preventDefault();
                //use list service to update
            });

            del.on('click', function(e){
                e.preventDefault();
                taskService.remove(listName,index);
                elem.hide();
                broadcast();
            });

            body.on('dblclick', function(el){
                body.attr('contentEditable',true);
            });

            body.on('blur', function(){
                if(body.attr('contentEditable')){
                    var text = body.text();
                    body.removeAttr('contentEditable');
                    taskService.edit(listName,index,text);
                    broadcast();
                }
            });

        }
    };
}]);