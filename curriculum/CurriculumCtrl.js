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

    // todo make config file and baseurl
    var apiUrl = 'https://better-flash-cards-api.herokuapp.com/api/'; //todo main configuration file

    $http.get(apiUrl + 'curriculaList').success(function(response){
         $scope.curics = _.map(response, mapper);
         //debugger;
         // $loading.finish('curriculas');
    });

    $loading.start('users');

    $scope.editClicked = function (){
        alert("edit");
    }

   $scope.deleteClicked = function (){
        alert("delete");
    }

    // todo move to separate widget controller


    // ===============================
    

}]);