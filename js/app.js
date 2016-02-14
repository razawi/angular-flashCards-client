angular.module('flashCardsApp', ['ngResource', 'ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller:  'cardlist',
                templateUrl: 'https://fierce-taiga-41516.herokuapp.com/public/apps/flashCards-client/Partials/CardsList.html'
            })
            .when('/cardview:id', {
                controller:  'cardview',
                templateUrl: 'https://fierce-taiga-41516.herokuapp.com/public/apps/flashCards-client/Partials/CardView.html'
            })
            .otherwise('/')
    }]);
