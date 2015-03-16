var app = angular.module('taskApp', [
    'ngRoute',
    'ngMaterial',
    'ngAnimate',
    'ngAria',
    'taskApp.controllers'
]);

app.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/', {
                templateUrl: 'app/views/home.html',
                controller: 'HomeController'
            }).
            when('/404', {
                templateUrl: 'app/views/404.html'
            }).
            otherwise({
                redirectTo: '/404'
            });
    }
]);