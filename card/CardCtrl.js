app.controller('CardCtrl', ['$scope', '$http', function($scope, $http) {

    function cardMapper(card){
        dispData={};
        dispData = _.pick(card, 'name', '_id', '');
        dispData.facess = _.map(card.facess, function (face){
            return _.pick(face, 'symbol', 'text');
        });

        return dispData;
    }

    // catch querystring - get right domain 
    $http.get(configData.url + '/cardsList').success(function(response){
        $scope.card = _.map([response[0]], cardMapper)[0]
        debugger;

    });
}]);