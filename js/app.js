angular.module('flashCardsApp', ['ngResource', 'ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller:  'cards',
                templateUrl: 'http://127.0.0.1:8888/public/apps/flashCards-client/Partials/CardList.html'
            })
            .otherwise('/')
    }]);
