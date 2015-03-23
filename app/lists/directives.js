
app.directive('lists', ['listService', '$rootScope', '$mdDialog',
    function(listService,$rootScope,$mdDialog){

    return{
        restrict: 'E',
        replace: false,
        templateUrl: 'app/lists/templates/list-tpl.html',
        link: function(scope, element, attributes){
            scope.listName = attributes.listName;
            var oldName = attributes.listName;
            scope.listIndex = attributes.listIndex ;

            var el = element.find('.listItem');
            var edit = el.find('.fa-edit');
            var del = el.find('.fa-times-circle-o');
            var save = el.find('.fa-check');
            var nameDiv  = el.find('.list-name');

            // Manipulate DOM here
            element.on('click', function(){
                angular.element('.listItem').removeClass('active');
                el.addClass('active');
                $rootScope.$broadcast('event:ListSelected', {listName: oldName} );
            });

            //Edit
            edit.on('click', function(e){
                e.preventDefault();
                save.show(); edit.hide(); del.hide();
                nameDiv.addClass('editOn').attr('contentEditable',true);
            });

            // Save
            save.on('click', function(evt){
                evt.preventDefault();
                var content = nameDiv.text();
                if(/\w+\s\w+/.test(content) || !/\S/.exec(content)){
                    $mdDialog.show(
                        $mdDialog.alert()
                            .content('list name has to be a word, no spaces')
                            .ok('Got it!')
                            .targetEvent(evt)
                    );
                }else{
                    nameDiv.removeClass('editOn').removeAttr('contentEditable');
                    save.hide(); edit.show(); del.show();
                    listService.edit(oldName,content);
                }
            });

            // Delete
            del.on('click', function(e){
                e.preventDefault();
                var ask = confirm('sure you want to delete this list ?');
                if(ask === true){
                    listService.remove(oldName);
                    el.hide();
                    $rootScope.$broadcast("event:ListServiceCalled");
                }
            });
        }
    };

}]);