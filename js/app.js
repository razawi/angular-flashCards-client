angular.module('flashCardsApp', ['ngResource', 'ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller:  'cardlist',
                templateUrl: 'http://127.0.0.1:8888/public/apps/flashCards-client/Partials/CardsList.html'
            })
            .when('/cardview:id', {
                controller:  'cardview',
                templateUrl: 'http://127.0.0.1:8888/public/apps/flashCards-client/Partials/CardView.html'
            })
            .otherwise('/')
    }]);
