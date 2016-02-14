angular.module('flashCardsApp')
    .controller('cardlist', ['$scope', '$http', function($scope, $http) {

        $http.get('https://fierce-taiga-41516.herokuapp.com/api/listallcards').success(function(response){
            $scope.cardslist = response;
            console.log("$scope.cardslist : " + $scope.cardslist.toString());
        })

        console.log("Hello World from tableManage");
    }]);
