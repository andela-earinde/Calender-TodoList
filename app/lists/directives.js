
app.directive('lists', ['listService', function(listService){

    return{
        restrict: 'E',
        replace: false,
        //scope: {},
        templateUrl: 'app/lists/templates/list-tpl.html',
        link: function(scope, element, attributes){
            scope.listName = attributes.listName;
            var oldname;
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
                oldname = attributes.listName;
            });

            //Edit
            edit.on('click', function(e){
                e.preventDefault();
                save.show(); edit.hide(); del.hide();
                nameDiv.addClass('editOn').attr('contentEditable',true);
            });

            // Save
            save.on('click', function(e){
                e.preventDefault();
                var content = nameDiv.html();
                if(/\w*\s\w*/.test(content)){
                    alert('list name has to be one word, no spaces');
                }else{
                    nameDiv.removeClass('editOn').removeAttr('contentEditable');
                    save.hide(); edit.show(); del.show();
                    listService.edit(oldname,content);
                }
            });
        }
    };

}]);