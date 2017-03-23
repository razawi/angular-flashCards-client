app.controller('CurriculaCtrl', ['$scope', '$http', function($scope, $http) {
   // show all categories

   // later - only per curricyula

   // link to category

   function catMapper(card){
        dispData={};
        dispData = _.pick(card, 'symbol', '_id', '');
        dispData.facess = _.map(card.facess, function (face){
            return _.pick(face, 'symbol', 'text');
        });

        return dispData;
    }

    // catch querystring - get right domain 
    $http.get(configData.url + '/categoriesList').success(function(response){
        $scope.categories = _.map(response, catMapper)
        debugger;

    });

}]);