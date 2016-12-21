'use strict';

angular.module('flashCardsApp')
    .controller('categoryListCtrl', ['$scope', '$http', '$routeParams', '$loading',
        function($scope, $http, $routeParams, $loading) {

        $scope.curriculumId = $routeParams.curriculumId;

        $http.get('/api/categorys/' + $scope.curriculumId).success(function(response){
            $scope.categories = response;
            $loading.finish('categoryList');
        })

        $loading.start('categoryList');
        console.log("Hello World from categoryListCtrl");
    }]);


