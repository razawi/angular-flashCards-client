
var myApp = angular.module('cardsApp', []);

console.log("cards.js is being evaluated");

//cardApp.config(function($routeProvider) {
//
//        $routeProvider.
//        when('/', {
//            templateUrl: '/views/CardPartials/cardsList.ejs',
//            controller: 'cardTableView'
//        }).
//        when('/card/:id', {
//            templateUrl: '/views/CardPartials/CardView.ejs',
//            controller: 'cardFacessView'
//        }).
//        otherwise({
//            redirectTo: '/'
//        });
//    });
//
//cardApp.controller('cardFacessView', ['$scope', '$http', function($scope, $http) {
//
//    console.log("Hello World from listTableManage cards angular app");
//    $http.get('/api/cards/card:id').success(function(response){
//        $scope.list = response;
//    })
//}]);


myApp.controller('cardTableView', ['$scope', '$http', function($scope, $http) {
    console.log('getting /api/listallcards');

    $http.get('/api/listallcards').success(function(response){
        console.log('$scope.list at cardslist');
        $scope.list = response;
    })

}]);