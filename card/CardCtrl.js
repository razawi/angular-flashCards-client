
app.controller('CardCtrl', ['$scope', '$http', function($scope, $http) {

    function cardMapper(card){
        dispData={};
        dispData = _.pick(card, 'name', '_id', '');
        dispData.facess = _.map(card.facess, function (face){
            return _.pick(face, 'symbol', 'text');
        });

        return dispData;
    }

    var card_id = ''
    try {
      card_id = window.location.href.split('?')[1].split('card_id=')[1].split('&')[0];
    } catch(ex){}

    $http.get(configData.url + '/card?id=' + card_id).success(function(response){
        debugger;
        $scope.card = _.map([response[0]], cardMapper)[0]
        setTimeout(function(){ $('.dataLink').hide() }, 120);
    });
}]);
