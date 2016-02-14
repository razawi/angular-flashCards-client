angular.module('flashCardsApp')
    .controller('cardlist', ['$scope', '$http', function($scope, $http) {
        // param
        $http.get('https://fierce-taiga-41516.herokuapp.com/api/cards/card:cardid').success(function(response){
            $scope.cardslist = response;
            console.log("$scope.cardslist : " + $scope.cardslist.toString());
        })

        console.log("Hello World from tableManage");
    }]);
