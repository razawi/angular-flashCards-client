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
    

    $scope.type = 'card';
    var cat_id = ''
    try {
      cat_id = window.location.href.split('?')[1].split('cat_id=')[1].split('&')[0];
    } catch(ex){}

    $scope.reflink = "card?card_id";
    
    //$scope.delLink = configData.url + '/api/card/' + curid;

    // fix dbInit for cards.category and category.schema on server, or switch to hardcoded _id systema 
    // '/category?id=' + cat_id
    debugger;
    $http.get(configData.url + '/cardslist').success(function(response){
         $scope.cards = _.map(response, mapper)
          debugger;
    });

}]);