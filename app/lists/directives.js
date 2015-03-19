
app.directive('lists', ['listService','$localStorage', function(listService,$localStorage){

    return{
        restrict: 'E',
        replace: false,
        //scope: {},
        templateUrl: 'app/lists/templates/list-tpl.html',
        link: function(scope, element, attributes){
            scope.listName = attributes.listName;
            scope.listIndex = attributes.listIndex ;

            // Manipulate DOM here
            element.on('click', function(){
                angular.element('.listItem').removeClass('active');
                var el = element.find('.listItem');
                el.addClass('active');
                var edit = el.find('.fa-edit');
                var del = el.find('.fa-times-circle-o');
                var save = el.find('.fa-check');
                var nameDiv  = el.find('.list-name');
                //var toolsDiv = el.find('.list-tools');


                //Edit function
                edit.on('click', function(e){
                    e.preventDefault();
                    save.show(); edit.hide(); del.hide();
                    nameDiv.addClass('editOn').attr('contentEditable',true);
                });

                save.on('click', function(e){
                    e.preventDefault();
                    var content = nameDiv.html();
                    if(/\w+\s\w+/.test(content)){
                        alert('list name has to be one word, no spaces');
                    }else{
                        nameDiv.removeClass('editOn').removeAttr('contentEditable');
                        save.hide(); edit.show(); del.show();
                        listService.edit(attributes.listName,content);
                    }
                });


            });
        }
    };

}]);