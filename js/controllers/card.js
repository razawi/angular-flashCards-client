angular.module('flashCardsApp')
    .controller('cardlist', ['$scope', '$http', function($scope, $http) {
        // param
        $http.get('http://127.0.0.1:8888//api/cards/card:cardid').success(function(response){
            $scope.cardslist = response;
            console.log("$scope.cardslist : " + $scope.cardslist.toString());
        })

        console.log("Hello World from tableManage");
    }]);
