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

            var el = elem.find('.note-item');

            if(attr.status == 'completed'){
                el.find('.fa-check-circle').hide();
            }

            var listName = attr.listName;
            var index = attr.taskId;

            var broadcast = function(){
                $rootScope.$broadcast('event:ListSelected',{listName: listName});
            };


            var check = el.find('.fa-check-circle');
            var del = el.find('.fa-times');
            var body = el.find('.note-body');
            var statusBar = el.find('.note-status');

            check.on('click', function(e){
                e.preventDefault();
                taskService.editUpdate(listName,index);
                check.hide();
                el.find('.note-status')
                    .text('completed')
                    .removeClass('status-'+attr.status)
                    .addClass('status-completed');
                el.addClass('animated tada').delay(1000).fadeIn('fast', function(){
                    el.removeClass('animated tada');
                    broadcast();
                });

            });

            del.on('click', function(e){
                e.preventDefault();
                var ask = confirm('seriously ?');
                if(ask === true){
                    taskService.remove(listName,index);
                    el.addClass('animated hinge').delay(1000).fadeOut('fast', function(){
                        broadcast();
                    });
                }
            });

            body.on('dblclick', function(el){
                body.attr('contentEditable',true);
                body.focus();
                body.addClass('animated pulse');
            });

            body.on('blur', function(){
                if(body.attr('contentEditable')){
                    body.removeClass('animated pulse');
                    var text = body.text();
                    body.removeAttr('contentEditable');
                    taskService.edit(listName,index,text);
                    broadcast();
                }
            });

        }
    };
}]);