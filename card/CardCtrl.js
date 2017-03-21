app.controller('CardCtrl', ['$scope', '$http', function($scope, $http) {

    function cardMapper(card){
           debugger;
        dispData={};
        dispData = _.pick(card, 'name', '_id', '');
        dispData.facess = _.map(card.facess, function (face){
            return _.pick(face, 'symbol', 'text');
        });

        return dispData;
    }

    // catch querystring - get right domain 
    $http.get('https://better-flash-cards-api.herokuapp.com/api/cardsList').success(function(response){
        $scope.categories = _.map([response[0]], cardMapper)
        debugger;

    });
}]);