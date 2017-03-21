app.controller('CategoryCtrl', ['$scope', '$http', function($scope, $http) {

   // show all cards per Category 

   // link to them

    function mapper(card){
        dispData={};
        dispData = _.pick(card, 'name', '_id', '');
        dispData.facess = _.map(card.facess, function (face){
            return _.pick(face, 'symbol', 'text');
        });

        return dispData;
    }

    // catch querystring - get right domain 
    $http.get('https://better-flash-cards-api.herokuapp.com/api/cardsList').success(function(response){
         $scope.cards = _.map(response, mapper)
          debugger;
    });

}]);