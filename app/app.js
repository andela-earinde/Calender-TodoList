var app = angular.module('taskApp', [
    'ngRoute',
    'ngAnimate',
    'ngMaterial',
    'ngAria',
    'ngStorage'
]);


app.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/', {
                templateUrl: 'app/listCalendar/views/home.html',
                controller: 'HomeController'
            }).
            when('/404', {
                templateUrl: 'app/listCalendar/views/404.html'
            }).
            otherwise({
                redirectTo: '/404'
            });
    }
]);
