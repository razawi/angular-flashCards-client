app.controller('CurriculumCtrl', ['$scope', '$http', '$loading',  function($scope, $http, $loading) {
   function mapper(card){
        dispData={};

        // todo - add description, categories
        dispData = _.pick(card, 'name', '_id', '');
        dispData.facess = _.map(card.facess, function (face){
            return _.pick(face, 'symbol', 'text');
        });

        return dispData;
    }

    var apiUrl = 'https://better-flash-cards-api.herokuapp.com/api/'; //todo main configuration file

    $http.get(apiUrl + 'curriculaList').success(function(response){
         $scope.curics = _.map(response, mapper);
         debugger;
         // $loading.finish('curriculas');
    });

    debugger;
    $loading.start('users');

}]);