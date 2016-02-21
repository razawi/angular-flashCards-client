'use strict';

angular.module('flashCardsApp')
    .controller('cardPileCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

        $scope.categoryId = $routeParams.categoryId;
        debugger;

        // param $scope.cardId
        $http.get('/api/cards/category/' + $scope.categoryId).success(function(response){
            $scope.cards = response;
        })

        console.log("Hello World from cardPileCtrl");
    }]);


