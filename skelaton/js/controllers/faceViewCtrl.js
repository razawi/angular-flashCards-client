'use strict';

angular.module('flashCardsApp')
    .controller('faceViewCtrl', ['$scope', '$http', '$routeParams', '$location', '$loading',
        function($scope, $http, $routeParams, $location, $loading) {

        $scope.categoryId = $routeParams.ctegoryId;
        $scope.card = $routeParams.cardnum;
        $scope.face = $routeParams.facenum;

        $http.get('/api/cards/category/' + $scope.categoryId).success(function(response){
            $scope.cards = response;
            console.log("$scope.card : " );

            $scope.faceText = $scope.cards[$scope.card].facess[$scope.face].text;
            $scope.symbolText = $scope.cards[$scope.card].facess[$scope.face].symbol;
            $loading.finish('face');
        });

        $loading.start('face');

        $scope.nextCard = function (){
            $loading.start('face');

            var newredirect ='';
            if ($scope.cards.length > (parseInt($scope.card)+1)) {
                newredirect = '/cards#/faceview/' + $scope.categoryId + '/' +
                    (parseInt($scope.card) + 1) + '/' + $scope.face;
            }
            else{
                newredirect = '/cards#/faceview/' + $scope.categoryId + '/0/' + $scope.face;
            }

            // TBD : window.location refreshes entire page, and not the angular way to this
            // find angular way to change url and only reload textual data,
            // without controller's $http.get and cards refresh.
            window.location = newredirect;
        }

        $scope.previousCard = function (){
            $loading.start('face');

            var newredirect ='';

            if ($scope.card > 0 ) {
                newredirect  ='/cards#/faceview/'+ $scope.categoryId +'/' +
                    (parseInt($scope.card)-1) +'/' + $scope.face;
            }
            else{
                newredirect = '/cards#/faceview/' + $scope.categoryId + '/' +
                    ($scope.cards.length -1) + '/' + $scope.face;
            }

            window.location = newredirect;
        }
        $scope.faceLeft = function (){
            $loading.start('face');

            var newredirect = '';
            if(parseInt($scope.face) > 0) {
                newredirect = '/cards#/faceview/' + $scope.categoryId + '/' +
                    $scope.card + '/' + (parseInt($scope.face) - 1);
            }
            else{
                newredirect = '/cards#/faceview/' + $scope.categoryId + '/' +
                    $scope.card + '/' + ($scope.cards[$scope.card ].facess.length-1);
            }
            window.location = newredirect;
        }

        $scope.faceRight = function (){
            $loading.start('face');

            var newredirect = '';
            if (parseInt($scope.face)+1 < $scope.cards[$scope.card ].facess.length){
                newredirect = '/cards#/faceview/'+ $scope.categoryId +'/' +
                    $scope.card +'/' + (parseInt($scope.face)+1);
            }
            else
            {
                newredirect = '/cards#/faceview/'+ $scope.categoryId +'/' + $scope.card +'/0';
            }

            window.location = newredirect;
        }

        console.log("Hello World from cardViewCtrl");
    }]);
