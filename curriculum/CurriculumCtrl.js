app.controller('CurriculumCtrl', ['$scope', '$http', '$loading',  function($scope, $http, $loading) {
   function mapper(card){
        dispData={};

        // todo - add description, categories, Isolate facess
        dispData = _.pick(card, 'name', '_id', '');
        dispData.facess = _.map(card.facess, function (face){
            return _.pick(face, 'symbol', 'text');
        });

        return dispData;
    }


    $scope.reflink = "curricula?cur_id";

    $http.get(configData.url + '/curriculaList').success(function(response){
         $scope.curics = _.map(response, mapper);
         //debugger;
         // $loading.finish('curriculas');
    });

    $loading.start('users');


}]);